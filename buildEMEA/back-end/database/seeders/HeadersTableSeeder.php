<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Header;

class HeadersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Header::create([
            'header' => 'Year',
            'order_id' => 1,
            'table_id' => 1, 
        ]);
        Header::create([
            'header' => 'Name of the workshop/ seminar',
            'order_id' => 2,
            'table_id' => 1, 
        ]);
        Header::create([
            'header' => 'Number of Participants',
            'order_id' => 3,
            'table_id' => 1, 
        ]);
        Header::create([
            'header' => 'Date From – To',
            'order_id' => 4,
            'table_id' => 1, 
        ]);
        Header::create([
            'header' => 'Link to the Activity report on the website',
            'order_id' => 5,
            'table_id' => 1, 
        ]);
        Header::create([
            'header' => 'Year',
            'order_id' => 1,
            'table_id' => 2, 
        ]);
        Header::create([
            'header' => 'Name of the workshop/ seminar',
            'order_id' => 2,
            'table_id' => 2, 
        ]);
        Header::create([
            'header' => 'Number of Participants',
            'order_id' => 3,
            'table_id' => 2, 
        ]);
        Header::create([
            'header' => 'Date From – To',
            'order_id' => 4,
            'table_id' => 2, 
        ]);
        Header::create([
            'header' => 'Link to the Activity report on the website',
            'order_id' => 5,
            'table_id' => 2, 
        ]);
        Header::create([
            'header' => 'Name of the activity',
            'order_id' => 1,
            'table_id' => 4, 
        ]);
        Header::create([
            'header' => 'Name of the Award/ recognition ',
            'order_id' => 2,
            'table_id' => 4, 
        ]);
        Header::create([
            'header' => 'Name of the Awarding government/ government recognised bodies',
            'order_id' => 3,
            'table_id' => 4, 
        ]);
        Header::create([
            'header' => 'Year of award ',
            'order_id' => 4,
            'table_id' => 4, 
        ]);
        Header::create([
            'header' => 'Name of the activity',
            'order_id' => 1,
            'table_id' => 5, 
        ]);
        Header::create([
            'header' => 'Name of the Award/ recognition ',
            'order_id' => 2,
            'table_id' => 5, 
        ]);
        Header::create([
            'header' => 'Name of the Awarding government/ government recognised bodies',
            'order_id' => 3,
            'table_id' => 5, 
        ]);
        Header::create([
            'header' => 'Year of award ',
            'order_id' => 4,
            'table_id' => 5, 
        ]);
        Header::create([
            'header' => 'Name of the activity',
            'order_id' => 1,
            'table_id' => 6, 
        ]);
        Header::create([
            'header' => 'Organising unit/ agency/ collaborating agency ',
            'order_id' => 2,
            'table_id' => 6, 
        ]);
       
        Header::create([
            'header' => 'Name of the scheme ',
            'order_id' => 3,
            'table_id' => 6, 
        ]);
        Header::create([
            'header' => 'Year of the activity ',
            'order_id' => 4,
            'table_id' => 6, 
        ]);
        Header::create([
            'header' => 'Number of students participated in such activities',
            'order_id' => 5,
            'table_id' => 6, 
        ]);
        Header::create([
            'header' => 'Name of the activity',
            'order_id' => 1,
            'table_id' => 7, 
        ]);
        Header::create([
            'header' => 'Organising unit/ agency/ collaborating agency ',
            'order_id' => 2,
            'table_id' => 7, 
        ]);
       
        Header::create([
            'header' => 'Name of the scheme ',
            'order_id' => 3,
            'table_id' => 7, 
        ]);
        Header::create([
            'header' => 'Year of the activity ',
            'order_id' => 4,
            'table_id' => 7, 
        ]);
        Header::create([
            'header' => 'Number of students participated in such activities',
            'order_id' => 5,
            'table_id' => 7, 
        ]);
        Header::create([
            'header' => 'Name of the activity',
            'order_id' => 1,
            'table_id' => 8, 
        ]);
        Header::create([
            'header' => 'Organising unit/ agency/ collaborating agency ',
            'order_id' => 2,
            'table_id' => 8, 
        ]);
       
        Header::create([
            'header' => 'Name of the scheme ',
            'order_id' => 3,
            'table_id' => 8, 
        ]);
        Header::create([
            'header' => 'Year of the activity ',
            'order_id' => 4,
            'table_id' => 8, 
        ]);
        Header::create([
            'header' => 'Number of students participated in such activities',
            'order_id' => 5,
            'table_id' => 8, 
        ]);
        Header::create([
            'header' => 'Name of the capability enhancement program',
            'order_id' => 1,
            'table_id' => 9, 
        ]);
        Header::create([
            'header' => 'Date of implementation                               (DD-MM-YYYY)',
            'order_id' => 2,
            'table_id' => 9, 
        ]);
        Header::create([
            'header' => 'Number of students enrolled',
            'order_id' => 3,
            'table_id' => 9, 
        ]);
        Header::create([
            'header' => 'Name of the agencies/consultants involved with contact details         (if any)',
            'order_id' => 4,
            'table_id' => 9, 
        ]);
        Header::create([
            'header' => 'Name of the capability enhancement program',
            'order_id' => 1,
            'table_id' => 10, 
        ]);
        Header::create([
            'header' => 'Date of implementation                               (DD-MM-YYYY)',
            'order_id' => 2,
            'table_id' => 10, 
        ]);
        Header::create([
            'header' => 'Number of students enrolled',
            'order_id' => 3,
            'table_id' => 10, 
        ]);
        Header::create([
            'header' => 'Name of the agencies/consultants involved with contact details         (if any)',
            'order_id' => 4,
            'table_id' => 10, 
        ]);
        Header::create([
            'header' => 'Name of the capability enhancement program',
            'order_id' => 1,
            'table_id' => 11, 
        ]);
        Header::create([
            'header' => 'Date of implementation                               (DD-MM-YYYY)',
            'order_id' => 2,
            'table_id' => 11, 
        ]);
        Header::create([
            'header' => 'Number of students enrolled',
            'order_id' => 3,
            'table_id' => 11, 
        ]);
        Header::create([
            'header' => 'Name of the agencies/consultants involved with contact details         (if any)',
            'order_id' => 4,
            'table_id' => 11, 
        ]);
       

    }
}
