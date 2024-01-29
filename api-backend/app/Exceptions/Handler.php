<?php

declare(strict_types=1);

namespace App\Exceptions;

use DomainException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;

class Handler extends ExceptionHandler
{
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });

        $this->renderable(function (Throwable $e, Request $request) {
            // Log the error only if it's not a validation exception
            if (!$e instanceof ValidationException) {
                Log::error($e);
            }

            if ($request->wantsJson()) {
                switch (true) {
                    case $e instanceof NotFoundHttpException:
                        return $this->handleNotFoundHttpException();

                    case $e instanceof ValidationException:
                        return $this->convertValidationExceptionToResponse($e, $request);

                    case $e instanceof DomainException:
                        return new JsonResponse([
                            'message' => $e->getMessage(),
                        ], JsonResponse::HTTP_BAD_REQUEST);

                    case $e instanceof AuthenticationException:
                        return $this->handleAuthenticationException($e);
                }

                return new JsonResponse([
                    'message' => $e->getMessage(),
                ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
            }

            throw $e;
        });
    }

    protected function handleNotFoundHttpException(): JsonResponse
    {
        return new JsonResponse([
            'message' => 'Resource not found.',
        ], JsonResponse::HTTP_NOT_FOUND);
    }

    protected function handleAuthenticationException(AuthenticationException $e): JsonResponse
    {
        return new JsonResponse([
            'message' => $e->getMessage(),
        ], JsonResponse::HTTP_UNAUTHORIZED);
    }
}
