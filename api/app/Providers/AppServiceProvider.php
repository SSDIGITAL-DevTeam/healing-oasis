<?php

namespace App\Providers;

use App\Services\AuthService;
use App\Services\Contracts\AuthService as AuthServiceContract;
use App\Support\UrlGenerator;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Foundation\Auth\User;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->singleton(AuthServiceContract::class, AuthService::class);
    }

    public function boot(): void
    {
        ResetPassword::createUrlUsing(function (User $user, string $token): string {
            return config('app.frontend_url').sprintf('/auth/reset-password?url=%s', UrlGenerator::generateResetPasswordUrl($user, $token));
        });

        VerifyEmail::createUrlUsing(function (User $user): string {
            return config('app.frontend_url').sprintf('/auth/verify-email?url=%s', UrlGenerator::generateEmailVerificationUrl($user));
        });

        VerifyEmail::toMailUsing(function (User $user, string $url) {
            return (new MailMessage)
                ->greeting(sprintf('Hi, %s!', $user->name))
                ->subject('Verify Email Address')
                ->line('Please click the button below to verify your email address.')
                ->action('Verify Email Address', $url);
        });
    }
}
