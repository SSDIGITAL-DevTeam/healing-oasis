<?php

declare(strict_types=1);

namespace App\Http\Resources\Profile;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProfileResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->whenHas('id'),
            'first_name' => $this->whenHas('first_name'),
            'last_name' => $this->whenHas('last_name'),
            'phone' => $this->whenHas('phone'),
            'avatar' => $this->whenHas('avatar'),
        ];
    }
}
