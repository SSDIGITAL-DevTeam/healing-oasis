<?php

declare(strict_types=1);

namespace Tests;

use App\Models\User;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    private ?string $route;

    private ?User $user;

    protected function setRoute(string $route): static
    {
        $this->route = $route;

        return $this;
    }

    protected function getRoute(): ?string
    {
        return $this->route;
    }

    protected function setUser(User $user): static
    {
        $this->user = $user;

        return $this;
    }

    protected function getUser(): ?User
    {
        return $this->user;
    }

    protected function createUser(bool $verified = true): User
    {
        $userFactory = User::factory();

        return $this->user ??= $verified ? $userFactory->create() : $userFactory->unverified()->create();
    }
}
