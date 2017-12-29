<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProduksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('produk', function (Blueprint $table) {
            $table->increments('id');
            $table->string('kode', 10);//url-nama
            $table->string('nama', 50);
            $table->unsignedInteger('harga');
            $table->string('berat', 20);
            $table->string('warna', 100); //JSON ARRAY
            $table->text('keterangan');
            $table->string('url', 70);//url-nama
            
            $table->unsignedInteger('brand_id');
            $table->unsignedInteger('kategori_id');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('produk');
    }
}
