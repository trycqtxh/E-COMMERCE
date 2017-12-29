<?php

namespace App\Transformers;

use App\Models\Gambar;
use League\Fractal\TransformerAbstract;

class GalleryTransformer extends TransformerAbstract
{
    /**
     * A Fractal transformer.
     *
     * @return array
     */
    public function transform(Gambar $gambar)
    {
        return [
            'id' => (int) $gambar->id,
            'asli' => $gambar->asli,
            'thumb' => $gambar->thumb
        ];
    }
}
