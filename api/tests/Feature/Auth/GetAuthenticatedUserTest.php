<?php

declare(strict_types=1);

namespace Tests\Feature\Auth;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class GetAuthenticatedUserTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->setRoute(route('v1.auth.me'));
    }

    public function testUnAuthenticated(): void
    {
        $this->getJson($this->getRoute())->assertUnauthorized();
    }

    public function testGetAuthenticatedUserSuccessfully(): void
    {
        Sanctum::actingAs($this->createUser());

        $this->getJson($this->getRoute())->assertOk();
    }
}
