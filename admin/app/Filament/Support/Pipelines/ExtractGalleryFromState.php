<?php

declare(strict_types=1);

namespace App\Filament\Support\Pipelines;

use Closure;
use Illuminate\Support\Facades\Pipeline;

final class ExtractGalleryFromState
{
    public static array $galleries = [];

    public function __invoke(array &$data, Closure $next)
    {
        static::$galleries = $data['galleries'] ?? [];

        static::$galleries = Pipeline::send(static::$galleries)
            ->through([
                $this->cleanUpGalleries(),
            ])
            ->thenReturn();

        unset($data['galleries']);

        return $next($data);
    }

    protected function cleanUpGalleries(): Closure
    {
        return function (array $data, Closure $next) {
            return $next(array_filter($data, fn (array $gallery): bool => !is_null($gallery['path'])));
        };
    }
}
