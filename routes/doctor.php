<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::group([ 'namespace' => 'Doctor', 'prefix' => 'api/doctor/' ],function(){
    Route::get('auth/check','DoctorAuthController@checkAuthDoctor');
    Route::get('auth/data','DoctorAuthController@authAdminData');
    Route::post('login','DoctorAuthController@login');
    
});

/* ============================= Authentication Router ============================= */ 
Route::group([ 'namespace' => 'Doctor', 'middleware' => 'doctor', 'prefix' => 'api/doctor/' ],function(){



    Route::get('logout','DoctorAuthController@logout');
});