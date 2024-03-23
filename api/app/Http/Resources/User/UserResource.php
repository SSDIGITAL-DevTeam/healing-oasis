<?php

declare(strict_types=1);

namespace App\Http\Resources\User;

use App\Http\Resources\Profile\ProfileResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->whenHas('id'),
            'name' => $this->whenHas('name'),
            'email' => $this->whenHas('email'),
            'email_verified_at' => $this->whenHas('email_verified_at'),
            'created_at' => $this->whenHas('created_at'),
            'profile' => ProfileResource::make($this->whenLoaded('profile')),
        ];
    }
}
