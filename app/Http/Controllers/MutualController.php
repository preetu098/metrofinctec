<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class MutualController extends Controller
{
    public function login()
    {
        return view('login');
    }

    public function registersubmit(Request $request)
    {
        $otp = rand(100000, 999999);
        // $mail_details = [
        //     'to' => $request->email,
        //     'subject' => 'Testing Application OTP',
        //     'body' => 'Your OTP is : ' . $otp,
        //     'header' => "From: webmaster@example.com",
        // ];

        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'mob_num' => $request->phone, 
            'mob_verified'=>0
        ];
 
        // Mail::to($request->email)->send(new NotifyMail($mail_details));
        if ($user = User::create($data)) {
            Auth::login($user);
            // response()->json(["message" => "success"])  
            dd('user created successfully'); 
            return  redirect()->back()->with('message','Registration Successfull');
        } else {
            return  redirect()->back()->with('error_message','Error Occured'); 
        }
    }

    public function loginsubmit(Request $request)
    {
        $data = [
            'email' => $request->email,
            'password' => $request->password,
        ];
        if (Auth::attempt($data)) {
            return response()->json(["type" => "success", "message" => "Login successfully"]);
        } else {
            return response()->json(["type" => "error", "message" => "Password Incorrect"]);
        }
    }

    public function logout()
    {
        Auth::logout();
        return redirect('/trial');
    }

    public function verifyotp(Request $request)
    {
        $loginid = Auth::user()->id;
        $data = User::find($loginid);
        if ($data) {
            if ($data->otp == $request->otp) {
                $data->otp = null;
                $data->token = 1;
                $data->save();
                return response()->json(["type" => "success", "message" => "Register successfully"]);
            } else {return response()->json(["type" => "error", "message" => "OTP Incorrect"]);}
        } else {return response()->json(["type" => "error", "message" => "User Not Found"]);}
    }
}
