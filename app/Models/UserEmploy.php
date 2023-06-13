<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Foundation\Auth\UserEmploy as Authenticatable;
use Illuminate\Database\Eloquent\Model;

class UserEmploy extends Model
{
    use HasFactory;
        protected $table = 'user_employ';
        protected $fillable = [
            'name',
            'email',
            'phone',
            'password'
        ];
        protected $guard = "'guards' => [
            'custom' => [
                'driver' => 'session',
                'provider' => 'custom',
            ],
        ]";
     
   
}
