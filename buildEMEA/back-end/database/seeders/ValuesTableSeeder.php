<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Value;
use App\Models\Header;

class ValuesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Assuming you have 45 headers with IDs from 1 to 45
        for ($headerId = 1; $headerId <= 45; $headerId++) {
            for ($valueIndex = 1; $valueIndex <= 3; $valueIndex++) {
                Value::create([
                    'header_id' => $headerId,
                    'value' => 'Auto-generated Value ' . $valueIndex . ' for Header ' . $headerId,
                ]);
            }
        }
    }
}
