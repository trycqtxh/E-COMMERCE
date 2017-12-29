<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Models\Produk::class, function(Faker $faker){
	$nama = $faker->unique->name;
	$brand = App\Models\Brand::inRandomOrder()->first();
	$kategori = App\Models\Kategori::inRandomOrder()->first();

	return [
		'kode' => 'KD'.$faker->ean8,
		'url' => str_slug($nama), 
		'nama' => $nama, 
		'harga' => 1000000, 
		'berat' => '10 Kg', 
		'warna' => '["Merah", "Hitam"]', 
		'keterangan' => $faker->paragraph($nbSentences = 3, $variableNbSentences = true), 
		'brand_id' => $brand->id, 
		'kategori_id' => $kategori->id
	];
});

