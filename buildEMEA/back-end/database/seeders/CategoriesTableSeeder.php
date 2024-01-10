<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the seeder.
     *
     * @return void
     */
    public function run()
    {
        // Insert sample categories
        DB::table('categories')->insert([
            ['category' => 'single_department'],
            ['category' => 'clubs'],
            ['category' => 'nss_ncc'],
            ['category' => 'library'],
            // Add more categories as needed
        ]);
    }
}
