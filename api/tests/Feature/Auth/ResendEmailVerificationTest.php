<?php

declare(strict_types=1);

namespace Tests\Feature\Auth;

use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Notification;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class ResendEmailVerificationTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->setRoute(route('v1.auth.verification.resend'));
    }

    public function testUserUnauthenticated(): void
    {
        $this->postJson($this->getRoute())->assertUnauthorized();
    }

    public function testResendEmailVerificationSent(): void
    {
        Notification::fake();

        Sanctum::actingAs($this->createUser(verified: false));

        $this->postJson($this->getRoute())->assertOk();

        Notification::assertSentTo($this->getUser(), VerifyEmail::class);
    }
}
