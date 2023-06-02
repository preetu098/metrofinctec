<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Access extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    protected $table = 'auths';

    protected $fillable = [
        'name',
        'email',
        'password',
        'mobile',
        'otp',
        'isvarify',     

    ];
    protected $primaryKey = 'id';
    protected $hidden = [
        'otp',
        'password',
    ];
}
