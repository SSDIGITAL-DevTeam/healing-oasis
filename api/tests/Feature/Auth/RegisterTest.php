<?php

declare(strict_types=1);

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Notification;
use Tests\TestCase;

class RegisterTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->setRoute(route('v1.auth.register'));
    }

    public function testValidationRunSuccessfully(): void
    {
        $this->postJson($this->getRoute())->assertUnprocessable();
    }

    public function testUserRegisteredSuccessfully(): void
    {
        Event::fake();

        $this->postJson($this->getRoute(), [
            'name' => 'Customer Name',
            'email' => 'customer@gmail.com',
            'password' => 'lQb£54I[^i_6',
            'password_confirmation' => 'lQb£54I[^i_6',
        ])->assertCreated();

        Event::assertDispatched(Registered::class);
        Event::assertListening(Registered::class, SendEmailVerificationNotification::class);
    }

    public function testEmailVerificationNotificationSent(): void
    {
        Notification::fake();

        $this->postJson($this->getRoute(), [
            'name' => 'Customer Name',
            'email' => 'customer@gmail.com',
            'password' => 'lQb£54I[^i_6',
            'password_confirmation' => 'lQb£54I[^i_6',
        ])->assertCreated();

        Notification::assertSentTo(User::latest()->first(), VerifyEmail::class);
    }
}
