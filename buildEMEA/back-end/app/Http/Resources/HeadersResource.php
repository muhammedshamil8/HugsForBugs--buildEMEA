<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class HeadersResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'header' => $this->header,
            'order_id' => $this->order_id,
            'table_id' => $this->table_id,
            'values' => ValuesResource::collection($this->whenLoaded('values')),
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}