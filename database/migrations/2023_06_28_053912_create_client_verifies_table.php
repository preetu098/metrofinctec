<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientVerifiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('client_verifies', function (Blueprint $table) {
            $table->id();
            $table->string('gender');
            $table->string('marital_status');
            $table->string('annual_income');
            $table->string('nationality');
            $table->string('father_name');
            $table->string('mother_name');
            $table->string('country_of_birth');
            $table->string('address');
            $table->string('state');
            $table->string('city');
            $table->integer('pin_code');
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
        Schema::dropIfExists('client_verifies');
    }
}
