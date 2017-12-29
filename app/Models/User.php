<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
	use HasApiTokens, Notifiable;
    protected $table = 'user';

    protected $hidden = [
    	'created_at', 'updated_at', 'password', 'remember_token'
    ];
}
