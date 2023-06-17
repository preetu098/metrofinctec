<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\contactUs;
use App\Models\UserEmploy;
use Illuminate\Support\Facades\Session;
use App\Models\Access;
use DB;


class AdminController extends Controller
{
    public function registersubmit(Request $request){
        $this->validate($request,[
            'name' => 'required|string',
            'email' => 'required|email|unique:auths',
            'password' => 'required|min:6',
            'otp' => 'required',
            'mobile' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|unique:auths|min:10',   
        ],[
            'name.required' => __('First Name required'),
            'email.required' => __('Email is required'),
            'password.required' => __('Password is required'),
            'password.min'=>__('Minimum Character should be six'),
            'mobile.required' => __('phone is required'),
            
        ]);
        // echo 'hi';die;
        $userdata = [
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
            'otp' => $request->input('otp'),         
            'phone' => $request['phone'],
        ];
        $user = Access::create($userdata)->id;
         return back()->with('success','you have successfully register');
}
public function contactUs(){
    $contact =DB::table('contact_us')->get();
    return view('contactUs')->with('contact', $contact);
    // echo "<pre>";print_r($contact);die;
    
}
public function employregister(Request $request){
        //echo 'hi';die;
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
      
              $request->validate([
                'email'=>'string|required|email',
                'password'=>'string|required'
            ]);
            $user= UserEmploy::where(['email'=>$request->email])->first();
            if(!$user || !Hash::check($request->password,$user->password))
            {
                return back()->with('error','invalid Crenditials');
            }else{
                $request->session()->put('user',$user);
                return redirect('/employ-dashboard');
        }
    }
        public function employdashboard(){
            return view('employ.employdashboard');
        }
        public function client_login(Request $request){
            $request->validate([
                'email'=>'string|required|email',
                'password'=>'string|required'
            ]);
            // dd($request->only(['email','password']));
            //    echo "hi";die;
            $usercredential = $request->only(['email','password']);
            // dd($usercredential);
            if(Auth::attempt($usercredential)){
        
                // $request->session()->regenerate();
                return redirect('/clentdashboard');
           }else{
              return back()->with('error','invalid Crenditials');
           }      
        }
        public function loadclient(){
            if(auth()->user()){
                return redirect('/clentdashboard');
            }
            return view('index');
        }
        public function logout(Request $request){
            $request->session()->flush();
            Auth::logout();
            return redirect('/');
        }
    public function clentdashboard(){
       return view('client.clientdashboard');
    }
    public function distributor_login(){
        return view('distributor.distributorlogin');
    }
    public function distributor_register(){
        return view('distributor.distributoregister');
    }

    public function distributorregister(Request $request){
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
       $user = User::create($userdata)->id;
        return back()->with('success','you have successfully register');
}
            public function distributorlogin(Request $request){
                $request->validate([
                    'email'=>'string|required|email',
                    'password'=>'string|required'
                ]);
                $user= User::where(['email'=>$request->email])->first();
                if(!$user || !Hash::check($request->password,$user->password))
                {
                    return back()->with('error','invalid Crenditials');
                }else{
                    $request->session()->put('user',$user);
                    return redirect('/distributordashboard');

          
            }}
            public function distributordashboard(){
                return view('distributor.distributordashboard');
            }

}
