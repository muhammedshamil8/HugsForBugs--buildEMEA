<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Value extends Model
{
    use HasFactory;

    protected $fillable = ['header_id', 'value', 'row_id'];

    // This is the updated logic for populating the row_id
    public static function boot()
    {
        parent::boot();

        static::creating(function ($value) {
            $lastRowId = static::where('header_id', $value->header_id)->max('row_id');

            // If there is no previous row_id for the same header, set it to 1
            $value->row_id = $lastRowId ? $lastRowId + 1 : 1;
        });
    }

    public function header()
    {
        return $this->belongsTo(Header::class);
    }
}
