<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegisterModel extends Model
{
   
    protected $table = 'register_data';
    protected $fillable = [
        'id',
        'auth_id',
        'pan',
        'date_of_birth',
        'account_type',
        'gender',
        'marital_status',
        'annual_income',
        'father_name',
        'mother_name',
        'nationality',
        'country_of_birth',
        'address',
        'state',
        'city',
        'pincode',

    ];
}
