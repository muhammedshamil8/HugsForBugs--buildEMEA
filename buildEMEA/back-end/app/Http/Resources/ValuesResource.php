<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ValuesResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'header_id' => $this->header_id,
            'row_id' => $this->row_id,
            'value' => $this->value,
            'header' => new HeadersResource($this->whenLoaded('header')),
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}