<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Transformers\BrandTransformer;
use Illuminate\Http\Request;
use Spatie\Fractal\Fractal;

class BrandController extends Controller
{
    public function index()
    {
    	$brand = Brand::all();

        return Fractal::create()
            ->collection($brand, new BrandTransformer());
    }
}
