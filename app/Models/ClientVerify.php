<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientVerify extends Model
{
    use HasFactory;
    protected $table = 'client_verifies';
    protected $fillable = [
        'gender',
        'marital_status',
        'annual_income',
        'nationality',
        'father_name',
        'mother_name',
        'country_of_birth',
        'address',
        'state',
        'city',
        'pin_code',
    ];
}
