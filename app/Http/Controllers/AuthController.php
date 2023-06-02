<?php

namespace App\Http\Controllers;

use App\Models\Access;
use App\Models\RegisterModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class AuthController extends Controller
{

    public function authsubmit(Request $request)
    {
        $otp = rand(100000, 999999);
        $mail_details = [
            'subject' => 'Testing Application OTP',
            'body' => 'Your OTP is : ' . $otp,
        ];

        $user = Access::where(['email' => $request->email, 'mobile' => $request->phone])->first();
        // echo '<prE>';print_r(Hash::make($request->password));exit;
        if ($user) {
            $user->otp = $otp;
            $user->isvarify = 0;
            if ($user->save()) {
                $otpmail = Mail::send('mail', ['mail_details' => $mail_details], function ($mes) use ($request) {
                    $mes->from('chandresh.maheshwari@gmail.com');
                    $mes->to($request->email)->subject("Verify your email");
                });
            } return response()->json(["message" => "success"]);
        } else {
            $data = [
                'name' => $request->name,
                'email' => $request->email,
                'mobile' => $request->phone,
                'password' => Hash::make($request->password),
                'otp' => $otp,
            ];

            // print_r($data);exit;

            if ($user = Access::create($data)) {
                //    $otpmail= Mail::to($request->email)->send(new NotifyMail($mail_details));
                $otpmail = Mail::send('mail', ['mail_details' => $mail_details], function ($mes) use ($request) {
                    $mes->from('chandresh.maheshwari@gmail.com');
                    $mes->to($request->email)->subject("Verify your email");
                });
                return response()->json(["message" => "success"]);
            } else {
                return response()->json(["message" => "error"]); 
            }
        }
    }

    public function authotp(Request $request)
    { 
        $user = Access::where(['email' => $request->email, 'mobile' => $request->phone, 'otp' => $request->otp])->first();
         if ($user) {
            // $pass = Str::random(10);         // generate rendom pass

            $user->otp = null;
            $user->isvarify = 1;
            // $user->password = Hash::make($pass); //assign password
            $user->save();

            // $pass_details = [
            //     'subject' => 'Testing Application password',
            //     'body' => 'Your password is : ' . $pass,
            // ];
            // //send mail
            // $otpmail = Mail::send('name', ['mail_details' => $pass_details], function ($mes) use ($request) {
            //     $mes->from('chandresh.maheshwari@gmail.com');
            //     $mes->to($request->email)->subject("Verify your email");
            // });
            return response()->json(["type" => "success", "message" => "Register successfully", 'auth_id' => $user->id]);

        } else {return response()->json(["type" => "error", "message" => "User Not Found"]);}

    }
// function call for Recident indian ==================START
    public function regdatastore(Request $request)
    {  
        $auth_id = $request->auth_id;
        $data = [
            'pan' => $request->pan,
            'auth_id' => $auth_id,
            'date_of_birth' => date('Y-m-d', strtotime($request->date_of_birth)),
            'account_type' => $request->account_type,
        ];

        $getid = RegisterModel::create($data);
        return redirect('/verifypart2/' . $getid->id);  
    }
// function call for Recident indian ==================START
    public function regdatato(Request $request)
    {
        $id = $request->get('id');  
        $update = DB::table('register_data')->where('id', $id)->update([
            'gender' => $request['gender'],
            'address' => $request['address'],
            'marital_status' => $request['marital_status'],
            'father_name' => $request['father_name'],
            'mother_name' => $request['mother_name'],
            'annual_income' => $request['annual_income'],
            'nationality' => $request['nationality'],
            'country_of_birth' => $request['country_of_birth'],
            'address' => $request['address'],
            'state' => $request['state'],
            'city' => $request['city'],
            'pincode' => $request['pincode'],
        ]); 
        return redirect('/afterregister/thank-you');
    }

    public function afterregister(Request $request)
    { return view('afterregister');  }

    public function afterregisterprocess()
    { return view("");}
}
