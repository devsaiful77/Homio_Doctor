<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppointmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('doctor_id');
            $table->unsignedBigInteger('patient_id');
            $table->unsignedBigInteger('disease_id');
            $table->unsignedBigInteger('schedule_id');
            $table->integer('visit_fee')->default(0);
            $table->integer('discount')->default(0);
            $table->string('appoint_time');
            $table->date('appoint_date');
            $table->enum('patient_type', ['old', 'new'])->default('new');
            $table->enum('status', ['entry','waiting','meet','release','cancel'])->default('new');
            $table->unsignedBigInteger('create_by_id');
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
        Schema::dropIfExists('appointments');
    }
}
