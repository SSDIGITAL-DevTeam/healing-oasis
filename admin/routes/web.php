<?php

use App\Filament\Pages\InitialSetup;
use App\Http\Middleware\HasNotInitialSetup;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/initial-setup', InitialSetup::class)->middleware([HasNotInitialSetup::class]);
Route::get('/fallback/login', fn () => redirect(filament()->getUrl()))->name('login');
