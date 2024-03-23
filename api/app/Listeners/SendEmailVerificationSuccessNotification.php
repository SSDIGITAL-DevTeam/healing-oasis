<?php

declare(strict_types=1);

namespace App\Listeners;

use App\Models\User;
use App\Notifications\EmailVerified;
use Illuminate\Auth\Events\Verified;

class SendEmailVerificationSuccessNotification
{
    public function handle(Verified $event): void
    {
        /** @var User $user */
        $user = $event->user;

        if ($user->hasVerifiedEmail()) {
            $user->notify(new EmailVerified());
        }
    }
}
