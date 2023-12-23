<?php
// Data.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Data extends Model
{
    use HasFactory;

    protected $fillable = [
        'category',
        'title',
        'user_id',
    ];

    /**
     * Get the user that owns the data record.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
