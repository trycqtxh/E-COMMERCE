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
});

Route::group(['prefix'=>'kategori'], function(){
	Route::get('/', 'KategoriController@index');
});

Route::group(['prefix'=>'brand'], function(){
	Route::get('/', 'BrandController@index');
});