<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\HeadersController;
use App\Http\Controllers\Api\TablesController;
use App\Http\Controllers\Api\ValuesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Auth routes
Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/admin/login', [AuthController::class, 'Adminlogin']);


//  User routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'userLogout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::get('/logged-user', [UserController::class, 'getAuthenticatedUser']);
    // Route::get('/headers/{table_id}', [HeadersController::class, 'getByTableId']);
    Route::get('/tables/{category_id}', [TablesController::class, 'getByCategoryId']);
    Route::get('/table-info/{id}', [TablesController::class, 'Description']);
    Route::get('/table-data/{table_id}', [HeadersController::class, 'getHeadersWithValues']);


});


// Admin routes
// prefix('admin')->
Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    // Your admin-only routes go here
    Route::post('/admin/logout', [AuthController::class, 'adminLogout']);
    // Add more admin routes as needed
    Route::apiResource('/admin/users', UserController::class);
 
    Route::get('/admin/category', [UserController::class, 'usersWithCategory']);
    Route::get('/admin/logged-user', [UserController::class, 'getAuthenticatedUser']);
    // Route::get('/admin/headers/{table_id}', [HeadersController::class, 'getByTableId']);
    Route::get('/admin/tables/{category_id}', [TablesController::class, 'getByCategoryId']);
    Route::get('/admin/table-info/{id}', [TablesController::class, 'Description']);
    Route::get('/admin/table-data/{table_id}', [HeadersController::class, 'getHeadersWithValues']);

});
