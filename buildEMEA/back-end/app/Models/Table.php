<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Table extends Model
{
    use HasFactory;

    protected $fillable = [
        'table_name', 'category_id', 'description',
        'short_description', 'note', 'is_finished', 'is_editable'
    ];
}
