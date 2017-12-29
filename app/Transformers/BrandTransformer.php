<?php

namespace App\Transformers;

use App\Models\Brand;
use League\Fractal\TransformerAbstract;

class BrandTransformer extends TransformerAbstract
{
    /**
     * A Fractal transformer.
     *
     * @return array
     */
    public function transform(Brand $model)
    {
        return [
            'id' => (string) $model->id,
            'brand' => $model->brand,
            'thumb' => $model->thumb,
        ];
    }
}
