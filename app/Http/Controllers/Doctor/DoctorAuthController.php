<?php

namespace App\Http\Controllers\Doctor;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Doctor;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class DoctorAuthController extends Controller
{
     /* User Login */
     public function login(Request $request)
     {
         $data = $request->validate([
             'phone' => 'required' ,
             'password' => 'required' ,
         ]);
 
         $credential = [ 'phone' => $data['phone'] , 'password' => $data['password'] , 'status' => 'active'] ;
         if (Auth::guard('doctor')->attempt($credential)) {
             Session::put('doctor', Auth::guard('doctor')->user());
             return response()->json([
                 'status' => true,
                 'message' => 'Login successfully ',
             ]);
         }else{
             return response()->json([
                 'status' => false,
                 'message' => 'Sorry :) in-valid login information'
             ]);
         }
     }
 
     public function checkAuthDoctor()
     {
         if (Auth::guard('doctor')->user()) {
             $doctor = Doctor::where('id',Auth::guard('doctor')->user()->id)->first();
             $token = Hash::make(rand(11111,99999).'doctor-'.$doctor->id);
             return response()->json([
                 'status' => 'AUTHORIZED',
                 'message' => 'you are login now',
                 'doctor' => $doctor,
                 'token' => $token,
             ]);
         } else {
             return response()->json([
                 'status' => 'UNAUTHORIZED',
                 'message' => 'you are not login',
             ]);
         }
     }
 
    //  public function authAdminData(){ 
    //      if (Auth::user()) {
    //          $admin_data = User::where('id',Auth::user()->id)->first();
    //          return response()->json([
    //              'status' => true,
    //              'admin_data' => $admin_data,
    //          ]);
    //      } else {
    //          return response()->json([
    //              'status' => false,
    //              'message' => 'you are not login',
    //          ]);
    //      } 
    //  }
 
 
     public function logout()
     {
        Auth::guard('doctor')->logout();
         if(Session::has('doctor')){
             Session::forget('doctor');
         }
         return response()->json([
             'status' => true,
             'message' => 'Log out was successfully',
         ]);
     }
}
