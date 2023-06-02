<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class MutualFundLatestNav extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Mutual_Fund_Latest_Nav', function (Blueprint $table) {
            $table->id('id');           
            $table->string('SchemeName');
            $table->string('Cateogry');
            $table->date('LatestNAVDate');
            $table->string('LatestNAV');
            $table->date('PreviousNAVDate');
            $table->string('PreviousNAV');
            $table->string('ChangePercentage')->nullable();
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
        //
    }
}
