<?php

namespace App\Filament\Resources\ServiceResource\Pages;

use App\Filament\Resources\ServiceResource;
use App\Filament\Support\Pipelines\ExtractCoverFromState;
use App\Filament\Support\Pipelines\ExtractGalleryFromState;
use App\Filament\Support\Pipelines\ExtractMetaFromState;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Pipeline;
use Illuminate\Support\Facades\Storage;

class EditService extends EditRecord
{
    protected static string $resource = ServiceResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make()
                ->using(function (Model $record): bool {
                    return DB::transaction(function () use ($record): bool {
                        $storage = Storage::disk('public');
                        $oldCoverPath = $record->cover?->path ?? '';
                        $oldMetaImagePath = $record->metas->firstWhere('value', 'og:image')?->content ?? '';
                        $galleryPaths = $record->galleries->pluck('path');

                        $record->cover?->delete();
                        $record->metas()->delete();
                        $record->galleries()->delete();
                        $record->categories()->detach();
                        $record->delete();

                        $storage->exists($oldCoverPath) && $storage->delete($oldCoverPath);
                        $storage->exists($oldMetaImagePath) && $storage->delete($oldMetaImagePath);

                        $galleryPaths->each(function ($path) use ($storage) {
                            $storage->exists($path) && $storage->delete($path);
                        });

                        return true;
                    });
                }),
        ];
    }

    protected function mutateFormDataBeforeFill(array $data): array
    {
        $data = $this->getRecord()->load(['cover', 'metas', 'galleries']);

        $data->setAttribute('cover', $data->cover?->only(['title', 'alt', 'path']));
        $data->setAttribute('metas', [
            'title' => $data->metas->firstWhere('value', 'title')?->content,
            'keywords' => $data->metas->firstWhere('value', 'keywords')?->content,
            'description' => $data->metas->firstWhere('value', 'description')?->content,
            'image' => $data->metas->firstWhere('value', 'og:image')?->content,
        ]);
        $data->setAttribute('galleries', $data->galleries?->map(fn ($gallery) => $gallery->only(['title', 'alt', 'path']))->toArray());

        $data->unsetRelations();

        return $data->toArray();
    }

    protected function mutateFormDataBeforeSave(array $data): array
    {
        return Pipeline::send($data)->through([
            ExtractCoverFromState::class,
            ExtractMetaFromState::class,
            ExtractGalleryFromState::class,
        ])->thenReturn();
    }

    protected function handleRecordUpdate(Model $record, array $data): Model
    {
        return DB::transaction(function () use ($record, $data) {
            parent::handleRecordUpdate($record, $data);

            $cover = ExtractCoverFromState::$cover;
            $metas = ExtractMetaFromState::$metas;
            $galleries = ExtractGalleryFromState::$galleries;
            $storage = Storage::disk('public');

            if (!!$cover) {
                $oldCoverPath = $record->cover?->path ?? '';

                $oldCoverPath !== $cover['path'] && $storage->exists($oldCoverPath) && $storage->delete($oldCoverPath);

                $record->cover?->update($cover) ?? $record->cover()->create($cover);
            }

            foreach ($metas as $meta) {
                if ($meta['value'] === 'og:image') {
                    $oldMetaImagePath = $record->metas->firstWhere('value', 'og:image')?->content ?? '';

                    $oldMetaImagePath !== $meta['content'] && $storage->exists($oldMetaImagePath) && $storage->delete($oldMetaImagePath);
                }

                $record->metas()->updateOrCreate([
                    'key' => $meta['key'],
                    'value' => $meta['value'],
                ], [
                    'content' => $meta['content'],
                ]);
            }

            $recordGalleries = $record->galleries;

            foreach ($recordGalleries as $recordGallery) {
                if (!in_array($recordGallery->path, array_column($galleries, 'path'))) {
                    $recordGallery->delete();

                    $storage->exists($recordGallery->path) && $storage->delete($recordGallery->path);
                }
            }

            foreach ($galleries as $gallery) {
                $record->galleries()->updateOrCreate([
                    'path' => $gallery['path'],
                ], [
                    'title' => $gallery['title'],
                    'alt' => $gallery['alt'],
                ]);
            }

            return $record->refresh();
        });
    }
}
