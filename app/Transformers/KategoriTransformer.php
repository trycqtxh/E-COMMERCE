<?php

namespace App\Transformers;

use App\Models\Kategori;
use League\Fractal\TransformerAbstract;

class KategoriTransformer extends TransformerAbstract
{
    /**
     * A Fractal transformer.
     *
     * @return array
     */
    public function transform(Kategori $kategori)
    {
        return [
            'id' => (int) $kategori->id,
            'kategori' => $kategori->kategori,
        ];
    }
}
