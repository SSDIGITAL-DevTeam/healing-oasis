<?php

declare(strict_types=1);

namespace App\Support;

use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\URL;

final class UrlGenerator
{
    public static function generateEmailVerificationUrl(User $user): string
    {
        return URL::temporarySignedRoute(
            'v1.auth.verification.verify',
            now()->addMinutes(config('auth.verification.expire', 60)),
            [
                'id' => $user->getKey(),
                'hash' => sha1($user->getEmailForVerification()),
            ]
        );
    }

    public static function generateResetPasswordUrl(User $user, string $token): string
    {
        return route('v1.auth.password.update', [
            'token' => $token,
            'email' => $user->getEmailForPasswordReset(),
        ]);
    }
}
