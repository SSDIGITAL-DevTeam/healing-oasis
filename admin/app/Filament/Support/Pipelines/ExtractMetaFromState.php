<?php

declare(strict_types=1);

namespace App\Filament\Support\Pipelines;

use Closure;
use Illuminate\Support\Facades\Pipeline;

final class ExtractMetaFromState
{
    public static array $metas = [];

    public function __invoke(array &$data, Closure $next): mixed
    {
        static::$metas = $data['metas'] ?? [];

        static::$metas = Pipeline::send(static::$metas)
            ->through([
                $this->prepareMetaData(),
                $this->normalizeMetaData(),
            ])
            ->thenReturn();

        unset($data['metas']);

        return $next($data);
    }

    protected function prepareMetaData(): Closure
    {
        return function (array $metas, Closure $next): mixed {
            foreach ($metas as $key => $value) {
                if ($key === 'image') {
                    $key = 'og:image';

                    $metas[$key] = $value;

                    unset($metas['image']);
                }
            }

            return $next($metas);
        };
    }

    /**
     * Transform data to the correct format.
     *
     * from:
     * ```
     * [
     *   'title' => 'Example Title'
     * ]
     * ```
     *
     * to:
     * ```
     * [
     *   'key' => 'name',
     *   'value' => 'title',
     *   'content' => 'Example Title',
     * ]
     * ```
     */
    protected function normalizeMetaData(): Closure
    {
        return function (array $metas, Closure $next): mixed {
            $normalizedMeta = [];

            foreach ($metas as $key => $value) {
                $normalizedMeta[] = [
                    'key' => str_starts_with($key, 'og:') ? 'property' : 'name',
                    'value' => $key,
                    'content' => $value ?? '',
                ];
            }

            return $next($normalizedMeta);
        };
    }
}
