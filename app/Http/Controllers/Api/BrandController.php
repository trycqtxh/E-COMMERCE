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

    public function show(Brand $brand)
    {
    	return response()->json($brand);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'brand' => 'required',
            'thumb' => 'required',
        ]);

        Brand::create($request->all());

        return response()->json([
            'title' => 'Created!',
            'message' => 'Data Berhasil Ditambahkan'
        ], 201);
    }

    public function update(Request $request, Brand $brand)
    {
        $this->validate($request, [
            'brand' => 'required',
            'thumb' => 'required', 
        ]);

        $brand->update($request->all());

        return response()->json([
            'title' => 'Updated!',
            'message' => 'Data Berhasil Diubah'
        ], 201);
    }

    public function destroy(Brand $brand)
    {
        $brand->delete();

        return response()->json([
            'title' => 'Deleted!',
            'message' => 'Data Berhasil Dihapus'
        ], 201);
    }
}
