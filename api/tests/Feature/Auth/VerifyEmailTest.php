<?php

declare(strict_types=1);

namespace Tests\Feature\Auth;

use App\Support\UrlGenerator;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Event;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class VerifyEmailTest extends TestCase
{
    use RefreshDatabase;

    public function testUserUnauthenticated(): void
    {
        $user = $this->createUser(verified: false);

        $this->setRoute(UrlGenerator::generateEmailVerificationUrl($user));

        $this->getJson($this->getRoute())->assertUnauthorized();
    }

    public function testEmailVerifiedSuccessfully(): void
    {
        Event::fake();

        $user = $this->createUser(verified: false);

        Sanctum::actingAs($user);

        $this->setRoute(UrlGenerator::generateEmailVerificationUrl($user));

        $this->getJson($this->getRoute())->assertOk();
        $this->assertDatabaseHas('users', ['id' => $user->getKey(), 'email_verified_at' => now()]);

        Event::assertDispatched(Verified::class);
    }
}
