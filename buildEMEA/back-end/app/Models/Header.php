<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Header extends Model
{
    use HasFactory;

    protected $fillable = ['header','order_id', 'table_id'];

    public function values()
    {
        return $this->hasMany(Value::class);
    }
}
