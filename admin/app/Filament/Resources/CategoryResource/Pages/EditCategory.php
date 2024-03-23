<?php

namespace App\Filament\Resources\CategoryResource\Pages;

use App\Filament\Resources\CategoryResource;
use App\Filament\Support\Pipelines\ExtractCoverFromState;
use App\Filament\Support\Pipelines\ExtractMetaFromState;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Pipeline;
use Illuminate\Support\Facades\Storage;

class EditCategory extends EditRecord
{
    protected static string $resource = CategoryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make()
                ->using(function (Model $record): bool {
                    return DB::transaction(function () use ($record): bool {
                        $storage = Storage::disk('public');
                        $oldCoverPath = $record->cover?->path ?? '';
                        $oldMetaImagePath = $record->metas->firstWhere('value', 'og:image')?->content ?? '';

                        $record->cover?->delete();
                        $record->metas()->delete();

                        try {
                            $record->delete();
                        } catch (QueryException $e) {
                            if ($e->getCode() === '23000' && str_contains($e->getMessage(), '1451')) {
                                Notification::make('delete-category')
                                    ->title('Failed to delete the category')
                                    ->body('The category cannot be deleted because it is in use. If you still want to delete it, please delete the service associated with it first.')
                                    ->danger()
                                    ->send();

                                return false;
                            }

                            throw $e;
                        }

                        $storage->exists($oldCoverPath) && $storage->delete($oldCoverPath);
                        $storage->exists($oldMetaImagePath) && $storage->delete($oldMetaImagePath);

                        return true;
                    });
                }),
        ];
    }

    protected function mutateFormDataBeforeFill(array $data): array
    {
        $data = $this->getRecord()->load(['cover', 'metas']);

        $data->setAttribute('cover', $data->cover?->only(['title', 'alt', 'path']));
        $data->setAttribute('metas', [
            'title' => $data->metas->firstWhere('value', 'title')?->content,
            'keywords' => $data->metas->firstWhere('value', 'keywords')?->content,
            'description' => $data->metas->firstWhere('value', 'description')?->content,
            'image' => $data->metas->firstWhere('value', 'og:image')?->content,
        ]);

        $data->unsetRelations();

        return $data->toArray();
    }

    protected function mutateFormDataBeforeSave(array $data): array
    {
        return Pipeline::send($data)->through([
            ExtractCoverFromState::class,
            ExtractMetaFromState::class,
        ])->thenReturn();
    }

    protected function handleRecordUpdate(Model $record, array $data): Model
    {
        return DB::transaction(function () use ($record, $data): Model {
            parent::handleRecordUpdate($record, $data);

            $cover = ExtractCoverFromState::$cover;
            $metas = ExtractMetaFromState::$metas;
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

            return $record->refresh();
        });
    }
}
