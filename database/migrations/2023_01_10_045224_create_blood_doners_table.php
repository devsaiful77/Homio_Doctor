<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBloodDonersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blood_doners', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('blood_id');
            $table->string('name',50);
            $table->string('phone',30);
            $table->string('image')->nullable();
            $table->integer('division_id');
            $table->integer('district_id');
            $table->integer('thana_id')->nullable();
            $table->integer('union_id')->nullable();
            $table->string('address')->nullable();
            $table->enum('status',['active','inactive'])->default('active');
            $table->unsignedBigInteger('insert_by_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('blood_doners');
    }
}
