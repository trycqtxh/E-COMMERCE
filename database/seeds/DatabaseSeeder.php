<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(BrandSeeder::class);
        $this->call(KategoriSeeder::class);
        $this->call(SettingSeeder::class);
        $this->call(WarnaSeeder::class);
        $this->call(UserSeeder::class);

        factory(App\Models\Produk::class, 100)->create()->each(function($produk){
            // $produk->id;
            for ($i=1; $i < 6; $i++) { 
                $gambar = new App\Models\Gambar();
                $gambar->asli = 'images/produk/'.$i.'.jpg';
                $gambar->thumb = 'images/produk/thumb/'.$i.'.jpg';
                $gambar->produk_id = $produk->id;
                $gambar->save();    
            }
            
        });
    }
}
