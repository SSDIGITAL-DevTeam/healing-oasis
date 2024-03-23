<?php

declare(strict_types=1);

namespace Tests\Feature\Auth;

use App\Support\UrlGenerator;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ResetPasswordTest extends TestCase
{
    use RefreshDatabase;

    public function testValidationRunSucessfully(): void
    {
        $user = $this->createUser();

        $this->setRoute(UrlGenerator::generateResetPasswordUrl($user, 'token'));

        $this->postJson($this->getRoute())->assertUnprocessable();
    }

    public function testResetPasswordSuccessfully(): void
    {
        $user = $this->createUser();

        $this->setRoute(UrlGenerator::generateResetPasswordUrl($user, 'token'));

        $this->postJson($this->getRoute(), [
            'password' => 'some-password@123',
            'password_confirmation' => 'some-password@123',
        ])->assertOk();
    }
}
