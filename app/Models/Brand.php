<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Brand extends Model
{
    use SoftDeletes;

    protected $table = 'brand';
    
    protected $dates = ['deleted_at'];
    
    protected $hidden = [
    	'created_at', 'updated_at', 'deleted_at'
    ];

    protected $fillable = ['brand', 'thumb'];

    public function produk()
    {
    	return $this->hasMany(Produk::class, 'brand_id');
    }
}
