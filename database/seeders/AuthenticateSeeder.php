<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\User;
use App\Models\Customer;
use App\Models\Outlet;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AuthenticateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*  Admin Panel User */
        $admin_user = new User();
        $admin_user->name = 'Supper Admin';
        $admin_user->phone = '01730233598';
        $admin_user->email = 'supper@admin.com';
        $admin_user->password = Hash::make(12345678);
        $admin_user->save();

        /*  Admin Panel User */
        $admin_user = new Admin();
        $admin_user->name = 'Supper Admin';
        $admin_user->phone = '01730233598';
        $admin_user->email = 'supper@admin.com';
        $admin_user->password = Hash::make(12345678);
        $admin_user->save();

        /* Outlet panel User */
        // $outlet = new Outlet();
        // $outlet->name = 'Saiful Islam';
        // $outlet->phone = '01730233598';
        // $outlet->email = 'user@gmail.com';
        // $outlet->username = '123';
        // $outlet->password = Hash::make('01730233598');
        // $outlet->division = 'Dhaka';
        // $outlet->district = 'Dhaka';
        // $outlet->thana = 'Savar';
        // $outlet->union = 'Bongaon';
        // $outlet->address = 'Gandaria';
        // $outlet->save();
        // $outlet->username = Str::slug($outlet->name.$outlet->id);
        // $outlet->save();
    }
}
