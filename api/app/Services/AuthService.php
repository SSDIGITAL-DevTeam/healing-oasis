<?php

declare(strict_types=1);

namespace App\Services;

use App\Http\Resources\User\UserResource;
use App\Models\User;
use App\Services\Contracts\AuthService as AuthServiceContract;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Password;
use Symfony\Component\HttpKernel\Exception\HttpException;

final class AuthService implements AuthServiceContract
{
    public function login(array $credentials): string
    {
        if (! auth()->attempt($credentials)) {
            throw new AuthenticationException('The provided credentials do not match our records.');
        }

        return auth()->user()->createToken('access_token', expiresAt: now()->addWeek())->plainTextToken;
    }

    public function logout(): void
    {
        auth()->user()->currentAccessToken()->delete();
    }

    public function register(array $data): array
    {
        return DB::transaction(function () use ($data): array {
            unset($data['password_confirmation']);

            $user = User::create($data);

            event(new Registered($user));

            return [
                'user' => UserResource::make($user),
                'token' => $user->createToken('access_token', expiresAt: now()->addWeek())->plainTextToken,
            ];
        });
    }

    public function resendEmailVerification(): string
    {
        /** @var User $user */
        $user = auth()->user();

        if ($user->hasVerifiedEmail()) {
            throw new HttpException(409, 'Email already verified.');
        }

        $user->sendEmailVerificationNotification();

        return $user->email;
    }

    public function forgotPassword(string $email): string
    {
        $user = User::where('email', $email)->firstOrFail();

        Password::sendResetLink([
            'email' => $user->email,
        ]);

        return $user->email;
    }

    public function resetPassword(array $data): void
    {
        Password::reset($data, function (User $user, string $password) {
            $user->forceFill(compact('password'));
            $user->save();

            event(new PasswordReset($user));
        });
    }

    public function me(): UserResource
    {
        return UserResource::make(auth()->user()->load('profile'));
    }
}
