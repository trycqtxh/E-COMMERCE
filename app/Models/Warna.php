<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Warna extends Model
{
    use SoftDeletes;

    protected $table = 'warna';
    
    protected $dates = ['deleted_at'];
    
    protected $hidden = [
    	'created_at', 'updated_at', 'deleted_at'
    ];
}
