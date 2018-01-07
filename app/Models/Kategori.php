<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Kategori extends Model
{
	use SoftDeletes;

    protected $table = 'kategori';
    
    protected $dates = ['deleted_at'];
    
    protected $hidden = [
    	'created_at', 'updated_at', 'deleted_at'
    ];

    protected $fillable = ['kategori'];

    public function produk()
    {
    	return $this->hasMany(Produk::class, 'kategori_id');
    }
}
