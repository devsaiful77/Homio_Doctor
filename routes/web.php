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
Route::get('reboot', function () {
    Artisan::call('cache:clear');
    Artisan::call('config:clear');
    Artisan::call('route:clear');
    Artisan::call('config:cache');
         dd("Ready to Start.");
});

###### PUBLIC API ROUTES ######
require 'admin.php';
###### PUBLIC API ROUTES ######

###### PUBLIC API ROUTES ######
require 'doctor.php';
###### PUBLIC API ROUTES ######


Route::get('/', function () {
    // $exitCode = Artisan::call('storage:link');
    return view('frontend.master');
})->name('welcome');


//admin mix routes
Route::get('/admin/{any}', function () {
    return view('admin.master');
})->where('any', '^(?!api\/)[\/\w\.\,-]*');


Route::get('/doctor/{any}', function () {
    return view('doctor.master');
})->where('any', '^(?!api\/)[\/\w\.\,-]*');


//frontend mix routes
Route::get('/{any}', function () {
    return view('frontend.master');
})->where('any', '.*');
