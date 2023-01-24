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
Route::group([ 'namespace' => 'Admin', 'prefix' => 'api/admin/' ],function(){
    Route::get('auth/check','AdminAuthController@checkAuthAdmin');
    Route::get('auth/data','AdminAuthController@authAdminData');
    Route::post('login','AdminAuthController@login');
    
});

/* ============================= Authentication Router ============================= */ 
Route::group([ 'namespace' => 'Admin', 'middleware' => 'admin', 'prefix' => 'api/admin/' ],function(){
    /* ===================== Service Work ===================== */
    Route::get('service/list','ServiceController@index');
    Route::post('service/create','ServiceController@store');






    Route::get('logout','AdminAuthController@logout');
});