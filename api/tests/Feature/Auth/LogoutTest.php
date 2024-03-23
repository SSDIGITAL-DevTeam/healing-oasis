<?php

declare(strict_types=1);

namespace Tests\Feature\Auth;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class LogoutTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->setRoute(route('v1.auth.logout'));
    }

    public function testUserUnauthenticated(): void
    {
        $this->postJson($this->getRoute())->assertUnauthorized();
    }

    public function testUserLogoutSuccessfully(): void
    {
        Sanctum::actingAs($this->createUser());

        $this->postJson($this->getRoute())->assertNoContent();
    }
}
