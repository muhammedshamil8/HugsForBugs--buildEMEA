<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DataResource extends JsonResource
{
    // public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'category' => $this->category,
            'title' => $this->title,
            'user' => new UserResource($this->whenLoaded('user')), // Include user information
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
        ];
    }
}
