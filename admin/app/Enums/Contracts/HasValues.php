<?php

declare(strict_types=1);

namespace App\Enums\Contracts;

interface HasValues
{
    public static function values(): array;
}
