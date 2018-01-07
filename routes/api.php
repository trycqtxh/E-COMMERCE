<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('user', 'UserController')
	->except(['create', 'edit']);

Route::group(['prefix'=>'produk'], function(){
	Route::get('/', 'ProdukController@index');
	Route::get('/{url}', 'ProdukController@getByUrl');

	Route::post('/', 'ProdukController@store');
	Route::get('/{produk}', 'ProdukController@show');
	Route::put('/{produk}', 'ProdukController@update');
	Route::delete('/{produk}', 'ProdukController@destroy');
});

Route::group(['prefix'=>'kategori'], function(){
	Route::get('/', 'KategoriController@index');
	Route::post('/', 'KategoriController@store');
	Route::get('/{kategori}', 'KategoriController@show');
	Route::put('/{kategori}', 'KategoriController@update');
	Route::delete('/{kategori}', 'KategoriController@destroy');
});

Route::group(['prefix'=>'brand'], function(){
	Route::get('/', 'BrandController@index');
	Route::post('/', 'BrandController@store');
	Route::get('/{brand}', 'BrandController@show');
	Route::put('/{brand}', 'BrandController@update');
	Route::delete('/{brand}', 'BrandController@destroy');
});