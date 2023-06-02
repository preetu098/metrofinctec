<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RegisterData extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('register_data', function (Blueprint $table) {
            $table->id();
            $table->integer('auth_id')->nullable();
            $table->string('pan')->nullable();
            $table->date('date_of_birth')->nullable();
            $table->integer('account_type')->nullable();            
            $table->string('gender')->nullable();
            $table->string('marital_status')->nullable();
            $table->integer('annual_income')->nullable();
            $table->string('father_name')->nullable();
            $table->string('mother_name')->nullable();
            $table->string('nationality')->nullable();
            $table->string('country_of_birth')->nullable();            
            $table->string('address')->nullable();
            $table->string('state')->nullable();
            $table->string('city')->nullable();
            $table->integer('pincode')->nullable();
            $table->timestamps();

          
        });
    }

    /**
     * 
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('register_data');
    }
}
