<?php

use Illuminate\Database\Seeder;
use App\Models\Kategori;

class KategoriSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $kategori = new Kategori();
        $kategori->kategori = 'Handphone';
        $kategori->save();
        $kategori = new Kategori();
        $kategori->kategori = 'Tablet';
        $kategori->save();
    }
}
