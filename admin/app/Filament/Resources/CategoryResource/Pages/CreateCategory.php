<?php

namespace App\Filament\Resources\CategoryResource\Pages;

use App\Filament\Resources\CategoryResource;
use App\Filament\Support\Pipelines\ExtractCoverFromState;
use App\Filament\Support\Pipelines\ExtractMetaFromState;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Pipeline;

class CreateCategory extends CreateRecord
{
    protected static string $resource = CategoryResource::class;

    protected static bool $canCreateAnother = false;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        return Pipeline::send($data)->through([
            ExtractCoverFromState::class,
            ExtractMetaFromState::class,
        ])->thenReturn();
    }

    protected function handleRecordCreation(array $data): Model
    {
        return DB::transaction(function () use ($data): Model {
            $record = parent::handleRecordCreation($data);

            $cover = ExtractCoverFromState::$cover;
            $metas = ExtractMetaFromState::$metas;

            !empty($cover) && $record->cover()->create($cover);
            $record->metas()->createMany($metas);

            return $record->refresh();
        });
    }
}
