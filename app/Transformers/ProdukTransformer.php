<?php

namespace App\Transformers;

use App\Models\Produk;
use League\Fractal\TransformerAbstract;

class ProdukTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'gallery', 'gambar', 'brand'
    ];

    /**
     * A Fractal transformer.
     *
     * @return array
     */
    public function transform(Produk $model)
    {
        $harga_baru = 0;
        if (!empty($model->diskon) && $model->diskon !== '0.00') {
            $harga_baru = $model->harga - ($model->harga / ($model->diskon * 100));/// $model->diskon * 100;// - $diskon;
        }
        return [
            'id' => (int) $model->id,
            'url_produk' => $model->kode,
            'produk' => $model->nama,
            'harga' => 'Rp.'.number_format($model->harga, 2, ',', '.'),
            'harga_baru' => 'Rp.'.number_format($harga_baru, 2, ',', '.'),
            'berat' => $model->berat,
            'warna' => $model->warna,
            'diskon' => ($model->diskon !== '0.00' || !($model->diskon))? $model->diskon : null,
            'deskripsi' => $model->keterangan,
        ];
    }

    public function includeGallery(Produk $produk)
    {
        $gallery = $produk->gambar;

        return $this->collection($gallery, new GalleryTransformer);
    }

    public function includeGambar(Produk $produk)
    {
        $gambar = $produk->gambar->first();

        return $this->item($gambar, new GalleryTransformer);
    }

    public function includeBrand(Produk $produk)
    {
        $brand = $produk->brand;

        return $this->item($brand, new BrandTransformer);
    }
}
