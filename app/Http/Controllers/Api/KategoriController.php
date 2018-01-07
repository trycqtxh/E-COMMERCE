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


    public function show(Kategori $kategori)
    {
    	return response()->json($kategori);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'kategori' => 'required',
        ]);

        Kategori::create($request->all());

        return response()->json([
            'title' => 'Created!',
            'message' => 'Data Berhasil Ditambahkan'
        ], 201);
    }

    public function update(Request $request, Kategori $kategori)
    {
        $this->validate($request, [
            'kategori' => 'required',
        ]);

        $kategori->update($request->all());

        return response()->json([
            'title' => 'Updated!',
            'message' => 'Data Berhasil Diubah'
        ], 201);
    }

    public function destroy(Kategori $kategori)
    {
        $kategori->delete();

        return response()->json([
            'title' => 'Deleted!',
            'message' => 'Data Berhasil Dihapus'
        ], 201);
    }
}
