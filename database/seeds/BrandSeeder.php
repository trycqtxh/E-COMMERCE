<?php

use Illuminate\Database\Seeder;
use App\Models\Brand;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $brand = new Brand();
        $brand->brand = 'Luna';
        $brand->thumb = 'images/brand/luna.png';
        $brand->save();
        $brand = new Brand();
        $brand->brand = 'LG';
        $brand->thumb = 'images/brand/lg.png';
        $brand->save();
        $brand = new Brand();
        $brand->brand = 'DelCell';
        $brand->thumb = 'images/brand/dell-cell.png';
        $brand->save();
        $brand = new Brand();
        $brand->brand = 'Samsung';
        $brand->thumb = 'images/brand/samsung.png';
        $brand->save();
        $brand = new Brand();
        $brand->brand = 'Oppo';
        $brand->thumb = 'images/brand/oppo.png';
        $brand->save();
        $brand->brand = 'Smartfren';
        $brand->thumb = 'images/brand/smartfren.png';
        $brand->save();
        $brand->brand = 'Iphone';
        $brand->thumb = 'images/brand/iphone.png';
        $brand->save();
    }
}
