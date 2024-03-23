<?php

declare(strict_types=1);

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class RegisterRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->guest();
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'max:255'],
            'email' => ['required', 'email:rfc,dns', 'unique:users,email', 'max:255'],
            'password' => ['required', 'confirmed', Password::min(8)->uncompromised()],
            'password_confirmation' => ['required', 'same:password'],
        ];
    }
}
