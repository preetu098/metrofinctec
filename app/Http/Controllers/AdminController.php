<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\contactUs;
use App\Models\UserEmploy;
use Illuminate\Support\Facades\Session;
use DB;


class AdminController extends Controller
{
    public function registersubmit(Request $request){
         $this->validate($request,[
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
            'otp' => 'required',
            'phone' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|unique:users|min:10',   
        ],[
            'name.required' => __('First Name required'),
            'email.required' => __('Email is required'),
            'password.required' => __('Password is required'),
            'password.min'=>__('Minimum Character should be six'),
            'phone.required' => __('Password is required'),
            
        ]);
        $userdata = [
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
            'otp' => $request->input('otp'),         
            'phone' => $request['phone'],
        ];
        $user = User::create($userdata)->id;
         return back()->with('success','you have successfully register');
}
public function contactUs(){
    $contact =DB::table('contact_us')->get();
    return view('contactUs')->with('contact', $contact);
    // echo "<pre>";print_r($contact);die;
    
}
    public function employregister(Request $request){
        $this->validate($request,[
            'name' => 'required|string',
            'email' => 'required|email|unique:user_employ',
            'password' => 'required|min:6',
            'phone' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|unique:user_employ|min:10',   
        ],[
           'name.required' => __('First Name required'),
           'email.required' => __('Email is required'),
           'password.required' => __('Password is required'),
           'password.min'=>__('Minimum Character should be six'),
           'phone.required' => __('Password is required'),
           
        ]);
        // echo 'hi';die;
       $userdata = [
           'name' => $request['name'],
           'email' => $request['email'],
           'password' => Hash::make($request['password']),
           'otp' => $request->input('otp'),         
           'phone' => $request['phone'],
       ];
    //    print_r($userdata);die;
       $user = UserEmploy::create($userdata)->id;
        return back()->with('success','you have successfully register');
}
     
        // public function employlogin(Request $req){
            
        //     $user= UserEmploy::where(['email'=>$req->email])->first();
        // if(!$user || !Hash::check($req->password,$user->password))
        // {
        //     return "username and password is not matched";
        // }else{
        //     $req->session()->put('user_employ',$user);
        //     return redirect('/');
    
        // }
        // }
        // public function employlogin(Request $request){
        //     $this->validate($request, [
        //         'username' => 'required|string',
        //         'password' => 'required|min:6'
        //     ], [
        //         'username.required' => __('username required'),
        //         'password.required' => __('password required')
        //     ]);
        //     echo 'hi';die;
        //     $user = UserEmploy::select('id','username','password')->where('email',$request->email)->first();
        //     if($user || !Hash::check($request->password,$user->password)){
        //         return redirect()->intended('login')->withErrors('please enter correct password');
        //     }
        //     else {
        //         Auth::login($user,true);
        //         if($request->remember)
        //         {
        //             // Auth::login($user, true);
        //             return redirect()->intended('employ/dashboard')->withSuccess('you have successfully login');
        //         }
        //     }

        // }
        // public function employlogin(Request $request){
        //     $this->validate($request, [
        //         'email' => 'required|string',
        //         'password' => 'required|min:6'
        //     ], [
        //         'email.required' => __('username required'),
        //         'password.required' => __('password required'),
        //     ]);
        
        //     $user = UserEmploy::select('id','email','password')->where('email', $request->email)->first();
        //     if(!$user || !Hash::check($request->password, $user->password)){
        //         return redirect()->intended('login')->withErrors('Please enter correct password');
        //     }
        //     else {
        //         if($request->remember)
        //         {
        //             Auth::login($user, true);
        //         } else {
        //             Auth::login($user);
        //         }
        //         return redirect()->intended('/employ/dashboard')->withSuccess('You have successfully logged in');
        //     }
        // }
        public function employlogin(Request $request){
              $email = $request->post('email');
              $password = $request->post('password');
              $result = UserEmploy::where(['email'=>$email,'password'=>$password])->first();
              if(isset($result['0']->id)){

              }else{
                $result->session()->flash('error','Please enter the valid login detail');
                return redirect('employ.employlogin');

              }
        }
        public function employdashboard(){
            return view('employ.dashboard');
        }
    }


