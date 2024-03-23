<?php

declare(strict_types=1);

namespace App\Filament\Support\Pipelines;

use Closure;

final class ExtractCoverFromState
{
    public static array $cover = [];

    public function __invoke(array &$data, Closure $next): mixed
    {
        static::$cover = $data['cover'] && $data['cover']['path'] ? $data['cover'] : [];

        unset($data['cover']);

        return $next($data);
    }
}
