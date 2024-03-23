<?php

declare(strict_types=1);

namespace App\Enums;

use App\Enums\Contracts\HasValues;
use App\Enums\Traits\InteractsWithValues;

enum Role: string implements HasValues
{
    use InteractsWithValues;

    case SuperAdmin = 'super-admin';
    case Admin = 'admin';
}
