<?php

declare(strict_types=1);

namespace App\Listeners;

use App\Notifications\PasswordReset as PasswordResetNotifications;
use Illuminate\Auth\Events\PasswordReset;

class SendPasswordResetSuccessNotification
{
    public function handle(PasswordReset $event): void
    {
        /** @var User $user */
        $user = $event->user;

        if ($user->hasVerifiedEmail()) {
            $user->notify(new PasswordResetNotifications());
        }
    }
}
