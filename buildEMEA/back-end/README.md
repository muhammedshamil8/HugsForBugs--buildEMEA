# Team HugsForBugs


How to run Back-end
- stack used : Laravel , MySql
- Clone the repo
- Get into the root directory [  cd buildEMEA/back-end  ]
- make sure you have composer , mysql installed in your machine 
  + Run `composer install` in the root directory to install all dependencies 
  + Create a database named `buildEMEA` in your local machine
  + Run `php artisan migrate` to migrate all tables to the database
  + Run `php artisan db:seed` to seed the database with dummy data
  + Run `php artisan serve` to start the server
  + Go to `localhost:8000` to view the app


