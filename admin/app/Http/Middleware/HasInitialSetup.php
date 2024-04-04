<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use App\Models\Setting;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class HasInitialSetup
{
    public function handle(Request $request, Closure $next): Response
    {
        if (Setting::count() < 1) {
            return redirect('initial-setup');
        }

        return $next($request);
    }
}
