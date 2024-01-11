<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TablesResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->table_name, 
            'description' => $this->description,
            'short_description' => $this->short_description,
            'note' => $this->note,
            'is_finished' => $this->is_finished,
            'is_editable' => $this->is_editable,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
