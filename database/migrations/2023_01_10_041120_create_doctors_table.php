<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDoctorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('doctors', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('service_id');
            $table->unsignedBigInteger('doc_category_id');
            $table->enum('doctor_type',['Online','Offline'])->default('Offline');
            $table->string('name');
            $table->string('phone');
            $table->string('email')->unique()->nullable();
            $table->string('username')->unique();
            $table->unsignedBigInteger('division');
            $table->unsignedBigInteger('district');
            $table->unsignedBigInteger('thana');
            $table->unsignedBigInteger('union')->nullable();
            $table->string('address')->nullable();
            $table->text('education')->nullable();
            $table->text('specialist')->nullable();
            $table->text('treatment')->nullable();
            $table->integer('new_patient_fee')->default(0);
            $table->integer('old_patient_fee')->default(0);
            $table->text('chamber_address')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('image')->nullable();
            $table->timestamp('last_login_time')->nullable();
            $table->timestamp('last_logout_time')->nullable();
            $table->text('signature')->nullable();
            $table->enum('status',['active','inactive'])->default('active');
            $table->rememberToken();
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
        Schema::dropIfExists('doctors');
    }
}
