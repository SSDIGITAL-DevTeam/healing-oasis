<?php

declare(strict_types=1);

namespace App\Services\Contracts;

use App\Http\Resources\User\UserResource;

interface AuthService
{
    /**
     * @return string The Access Token
     */
    public function login(array $credentials): string;

    public function logout(): void;

    /**
     * @return array{user: UserResource, token: string}
     */
    public function register(array $data): array;

    /**
     * @return string The user's email
     */
    public function resendEmailVerification(): string;

    /**
     * @return string The user's email
     */
    public function forgotPassword(string $email): string;

    public function resetPassword(array $data): void;

    public function me(): UserResource;
}
