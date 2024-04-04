<?php

declare(strict_types=1);

namespace Tests\Feature\Auth;

use Database\Factories\UserFactory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class LoginTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->setRoute(route('v1.auth.login'));
    }

    public function testValidationRunSuccessfully(): void
    {
        $this->postJson($this->getRoute())->assertUnprocessable();
    }

    public function testCredentialsDoesNotMatch(): void
    {
        $this->postJson($this->getRoute(), [
            'email' => 'notexistemail@gmail.com',
            'password' => 'notexistpassword',
        ])->assertUnauthorized();
    }

    public function testUserLoginSuccessfully(): void
    {
        $user = $this->createUser();

        $this->postJson($this->getRoute(), [
            'email' => $user->email,
            'password' => UserFactory::$password,
        ])->assertOk();
    }
}
