<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        DB::beginTransaction();
        $this->call(DivisionSeeder::class);
        $this->call(DistrictSeeder::class);
        $this->call(ThanaSeeder::class);
        $this->call(UnionSeeder::class);
        $this->call(AuthenticateSeeder::class);
        DB::commit();
    }
}
