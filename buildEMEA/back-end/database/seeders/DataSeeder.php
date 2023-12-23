<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class DataSeeder extends Seeder
{

    public function run()
    {
        $user = Auth::user();
    
        // Insert sample data into the 'data' table associated with the logged-in user
        DB::table('data')->insert([
            'category' => 'demo Category',
            'title' => 'demo Title',
            'user_id' => $user->id,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    
        // Add more sample data as needed
    }
}
