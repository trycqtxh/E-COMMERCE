<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gambar extends Model
{
    protected $table = 'gambar';

    public function produk()
    {
    	return $this->belongsTo(Produk::class, 'produk_id');
    }
}
