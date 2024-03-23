<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\Auth\ForgotPasswordRequest;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Requests\Auth\ResetPasswordRequest;
use App\Services\Contracts\AuthService;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpKernel\Exception\HttpException;

class AuthController
{
    public function __construct(public AuthService $authService)
    {
        //
    }

    public function login(LoginRequest $request): JsonResponse
    {
        try {
            return new JsonResponse([
                'data' => [
                    'token' => $this->authService->login($request->validated()),
                ],
            ]);
        } catch (AuthenticationException $e) {
            return new JsonResponse([
                'message' => $e->getMessage(),
            ], JsonResponse::HTTP_UNAUTHORIZED);
        }
    }

    public function logout(): JsonResponse
    {
        $this->authService->logout();

        return new JsonResponse(status: JsonResponse::HTTP_NO_CONTENT);
    }

    public function register(RegisterRequest $request): JsonResponse
    {
        ['user' => $user, 'token' => $token] = $this->authService->register($request->validated());

        return new JsonResponse([
            'message' => sprintf('Account registered successfully. Verification email sent to your email at %s.', $user->resource->email),
            'data' => compact('user', 'token'),
        ], status: JsonResponse::HTTP_CREATED);
    }

    public function verifyEmail(EmailVerificationRequest $request): JsonResponse
    {
        $request->fulfill();

        return new JsonResponse([
            'message' => 'Email verified successfully.',
        ]);
    }

    public function resendEmailVerification(): JsonResponse
    {
        try {
            return new JsonResponse([
                'message' => sprintf('Verification email sent to your email at %s.', $this->authService->resendEmailVerification()),
            ]);
        } catch (HttpException $e) {
            return new JsonResponse([
                'message' => $e->getMessage(),
            ], $e->getStatusCode());
        }
    }

    public function forgotPassword(ForgotPasswordRequest $request): JsonResponse
    {
        $email = $this->authService->forgotPassword($request->validated('email'));

        return new JsonResponse([
            'message' => sprintf('Password reset link sent to your email at %s.', $email),
        ]);
    }

    public function resetPassword(ResetPasswordRequest $request, string $token, string $email): JsonResponse
    {
        $data = $request->validated();

        $data['token'] = $token;
        $data['email'] = $email;

        $this->authService->resetPassword($data);

        return new JsonResponse([
            'message' => 'Password reset successfully.',
        ]);
    }

    public function me(): JsonResponse
    {
        return new JsonResponse([
            'message' => 'User retrieved successfully.',
            'data' => $this->authService->me(),
        ]);
    }
}
