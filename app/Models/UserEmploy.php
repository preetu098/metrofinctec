<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;

class UserEmploy extends Authenticatable
{
    use HasFactory;
        protected $table = 'user_employ';
        protected $fillable = [
            'name',
            'email',
            'phone',
            'password'
        ];
        protected $guard = 'useremploy';
     
   
}
