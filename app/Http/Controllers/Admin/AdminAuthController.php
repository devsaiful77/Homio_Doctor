<?php

namespace App\Http\Controllers\Admin;

use App\Models\Admin;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class AdminAuthController extends Controller
{
    /* User Login */
    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => 'required' ,
            'password' => 'required' ,
        ]);

        $credential = [ 'email' => $data['email'] , 'password' => $data['password'] , 'status' => 'active'] ;
        if (Auth::guard('admin')->attempt($credential)) {
            Session::put('admin', Auth::guard('admin')->user());
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

    public function checkAuthAdmin()
    {
        if (Auth::guard('admin')->user()) {
            $admin = Admin::where('id',Auth::guard('admin')->user()->id)->first();
            $token = Hash::make(rand(11111,99999).'admin-'.$admin->id);
            return response()->json([
                'status' => 'AUTHORIZED',
                'message' => 'you are login now',
                'admin' => $admin,
                'token' => $token,
            ]);
        } else {
            return response()->json([
                'status' => 'UNAUTHORIZED',
                'message' => 'you are not login',
            ]);
        }
    }

    public function authAdminData(){ 
        if (Auth::guard('admin')->user()) {
            $admin_data = Admin::where('id',Auth::guard('admin')->user()->id)->first();
            return response()->json([
                'status' => true,
                'admin_data' => $admin_data,
            ]);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'you are not login',
            ]);
        } 
    }


    public function logout()
    {
        Auth::guard('admin')->logout();
        if(Session::has('admin')){
            Session::forget('admin');
        }
        return response()->json([
            'status' => true,
            'message' => 'Log out was successfully',
        ]);
    }


}
