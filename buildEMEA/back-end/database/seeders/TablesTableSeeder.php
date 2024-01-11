<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Table;

class TablesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Table::create([
            'table_name' => '3.2.2',
            'category_id' => 2,
            'description' => '3.2.2 Number of workshops/seminars conducted on Research Methodology, Intellectual Property Rights (IPR) and entrepreneurship during the year',
            'short_description' => 'Number of workshops/seminars conducted on Research Methodology',
            'note' => '',
            'is_finished' => true,
            'is_editable' => false,
        ]);
        Table::create([
            'table_name' => '3.2.2',
            'category_id' => 1,
            'description' => '3.2.2 Number of workshops/seminars conducted on Research Methodology, Intellectual Property Rights (IPR) and entrepreneurship during the year',
            'short_description' => 'Number of workshops/seminars conducted on Research Methodology',
            'note' => '',
            'is_finished' => true,
            'is_editable' => false,
        ]);
        Table::create([
            'table_name' => '3.2.2',
            'category_id' => 3,
            'description' => '3.2.2 Number of workshops/seminars conducted on Research Methodology, Intellectual Property Rights (IPR) and entrepreneurship during the year',
            'short_description' => 'Number of workshops/seminars conducted on Research Methodology',
            'note' => '',
            'is_finished' => true,
            'is_editable' => false,
        ]);
        Table::create([
            'table_name' => '3.4.2',
            'category_id' => 2, // Adjust the category_id based on your needs
            'description' => '3.4.2 Number of awards and recognitions received for extension activities from government/ government recognized bodies during the year',
            'short_description' => 'Number of awards and recognitions received for extension activities from government',
            'note' => '',
            'is_finished' => true,
            'is_editable' => false,
        ]);
        Table::create([
            'table_name' => '3.4.2',
            'category_id' => 3, // Adjust the category_id based on your needs
            'description' => '3.4.2 Number of awards and recognitions received for extension activities from government/ government recognized bodies during the year',
            'short_description' => 'Number of awards and recognitions received for extension activities from government',
            'note' => '',
            'is_finished' => true,
            'is_editable' => false,
        ]);
        Table::create([
            'table_name' => '3.4.3 & 3.4.4',
            'category_id' => 2, // Adjust the category_id based on your needs
            'description' => '3.4.3  Number of extension and outreach Programmes conducted by the institution through NSS/ NCC/Government and Government recognized bodies (including the programmes such as Swachh Bharat, AIDS awareness, Gender issues etc. ) and/or  those organised in collaboration with industry, community and NGOs during the year                                                                                                                 & 3.4.4 Number of students participating in extension activities at 3.4.3. above during ',
            'short_description' => 'Number of extension and outreach Programmes conducted by the institution through...',
            'note' => '',
            'is_finished' => true,
            'is_editable' => false,
        ]);
        Table::create([
            'table_name' => '3.4.3 & 3.4.4',
            'category_id' => 1, // Adjust the category_id based on your needs
            'description' => '3.4.3  Number of extension and outreach Programmes conducted by the institution through NSS/ NCC/Government and Government recognized bodies (including the programmes such as Swachh Bharat, AIDS awareness, Gender issues etc. ) and/or  those organised in collaboration with industry, community and NGOs during the year                                                                                                                 & 3.4.4 Number of students participating in extension activities at 3.4.3. above during ',
            'short_description' => 'Number of extension and outreach Programmes conducted by the institution through...',
            'note' => '',
            'is_finished' => true,
            'is_editable' => false,
        ]);
        Table::create([
            'table_name' => '3.4.3 & 3.4.4',
            'category_id' => 3, // Adjust the category_id based on your needs
            'description' => '3.4.3  Number of extension and outreach Programmes conducted by the institution through NSS/ NCC/Government and Government recognized bodies (including the programmes such as Swachh Bharat, AIDS awareness, Gender issues etc. ) and/or  those organised in collaboration with industry, community and NGOs during the year                                                                                                                 & 3.4.4 Number of students participating in extension activities at 3.4.3. above during ',
            'short_description' => 'Number of extension and outreach Programmes conducted by the institution through...',
            'note' => '',
            'is_finished' => true,
            'is_editable' => false,
        ]);
        Table::create([
            'table_name' => '5.1.3',
            'category_id' => 2, // Adjust the category_id based on your needs
            'description' => '5.1.3 Capacity building and skills enhancement initiatives taken by the institution include the following
            1. Soft skills, 2. Language and communication skills, 3. Life skills (Yoga, physical fitness, health and hygiene), 4. ICT/computing  skills',
            'short_description' => 'Capacity building and skills enhancement initiatives taken by the institution',
            'note' => '',
            'is_finished' => true,
            'is_editable' => false,
        ]);
        Table::create([
            'table_name' => '5.1.3',
            'category_id' => 1, // Adjust the category_id based on your needs
            'description' => '5.1.3 Capacity building and skills enhancement initiatives taken by the institution include the following
            1. Soft skills, 2. Language and communication skills, 3. Life skills (Yoga, physical fitness, health and hygiene), 4. ICT/computing  skills',
            'short_description' => 'Capacity building and skills enhancement initiatives taken by the institution',
            'note' => '',
            'is_finished' => true,
            'is_editable' => false,
        ]);
        Table::create([
            'table_name' => '5.1.3',
            'category_id' => 3, // Adjust the category_id based on your needs
            'description' => '5.1.3 Capacity building and skills enhancement initiatives taken by the institution include the following
            1. Soft skills, 2. Language and communication skills, 3. Life skills (Yoga, physical fitness, health and hygiene), 4. ICT/computing  skills',
            'short_description' => 'Capacity building and skills enhancement initiatives taken by the institution',
            'note' => '',
            'is_finished' => true,
            'is_editable' => false,
        ]);

        // Add more Table entries as needed
    }
}
