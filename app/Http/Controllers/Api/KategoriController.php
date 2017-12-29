<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Kategori;
use App\Transformers\KategoriTransformer;
use Illuminate\Http\Request;
use Spatie\Fractal\Fractal;

class KategoriController extends Controller
{
    public function index()
    {
    	$Kategori = Kategori::all();

        return Fractal::create()
            ->collection($Kategori, new KategoriTransformer());
    }
}
