<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('v1')->as('v1.')->group(function (): void {
    Route::prefix('auth')->as('auth.')->group(function (): void {
        Route::middleware(['guest'])->group(function (): void {
            Route::post('login', [AuthController::class, 'login'])->name('login');
            Route::post('forgot-password', [AuthController::class, 'forgotPassword'])->name('password.forgot');
            Route::post('reset-password/{token}/{email}', [AuthController::class, 'resetPassword'])->name('password.update');
            Route::post('register', [AuthController::class, 'register'])->name('register');
        });

        Route::middleware(['auth:sanctum'])->group(function (): void {
            Route::get('verify-email/{id}/{hash}', [AuthController::class, 'verifyEmail'])
                ->middleware('signed')
                ->name('verification.verify');

            Route::post('resend-email-verification', [AuthController::class, 'resendEmailVerification'])->name('verification.resend');
            Route::post('logout', [AuthController::class, 'logout'])->name('logout');
            Route::get('me', [AuthController::class, 'me'])->name('me');
        });
    });
});
