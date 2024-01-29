<?php

declare(strict_types=1);

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    public const HOME = '/home';

    public function boot(): void
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
        });

        $this->routes(function () {
            Route::middleware('api')->prefix('api')->as('api.')->group(function (): void {
                Route::prefix('v1')->as('v1.')->group(function (): void {
                    Route::prefix('back-office')->as('back-office.')->group(base_path('routes/api/v1/back-office/api.php'));
                    Route::prefix('end-user')->as('end-user.')->group(base_path('routes/api/v1/end-user/api.php'));
                });
            });

            Route::middleware('web')->group(base_path('routes/web.php'));
        });
    }
}
