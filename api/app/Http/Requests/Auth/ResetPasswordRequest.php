<?php

declare(strict_types=1);

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class ResetPasswordRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->guest();
    }

    public function rules(): array
    {
        return [
            'password' => ['required', 'confirmed', Password::min(8)->uncompromised()],
            'password_confirmation' => ['required', 'same:password'],
        ];
    }
}
