<?php

use Illuminate\Database\Seeder;
use App\Models\Warna;

class WarnaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $w = new Warna();
        $w->warna = 'Hitam';
        $w->save();
        $w = new Warna();
        $w->warna = 'Putih';
        $w->save();
        $w = new Warna();
        $w->warna = 'Gold';
        $w->save();
        $w = new Warna();
        $w->warna = 'Siver';
        $w->save();
    }
}
