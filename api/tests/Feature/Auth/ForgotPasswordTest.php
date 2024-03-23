<?php

declare(strict_types=1);

namespace Tests\Feature\Auth;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ForgotPasswordTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->setRoute(route('v1.auth.password.forgot'));
    }

    public function testValidationRunSuccessfully(): void
    {
        $this->postJson($this->getRoute())->assertUnprocessable();
    }

    public function testEmailNotFound(): void
    {
        $this->postJson($this->getRoute(), [
            'email' => 'notexistsemail@gmail.com',
        ])->assertNotFound();
    }

    public function testResetPasswordLinkSentSuccessfully(): void
    {
        $user = $this->createUser();

        $this->postJson($this->getRoute(), [
            'email' => $user->email,
        ])->assertOk();
    }
}
