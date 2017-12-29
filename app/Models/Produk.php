<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use AlgoliaSearch\Laravel\AlgoliaEloquentTrait;

class Produk extends Model
{
	use SoftDeletes;
    use AlgoliaEloquentTrait;

    protected $table = 'produk';
    
    protected $dates = ['deleted_at'];
    
    protected $hidden = [
    	'created_at', 'updated_at', 'deleted_at'
    ];

    public function gambar()
    {
    	return $this->hasMany(Gambar::class, 'produk_id');
    }

    public function brand()
    {
    	return $this->belongsTo(Brand::class, 'brand_id');
    }

    public function kategori()
    {
    	return $this->belongsTo(Produk::class, 'kategori_id');
    }
    
}
