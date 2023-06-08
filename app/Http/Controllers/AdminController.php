<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\contactUs;
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


}