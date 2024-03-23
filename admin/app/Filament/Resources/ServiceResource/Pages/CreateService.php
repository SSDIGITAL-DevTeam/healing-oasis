<?php

namespace App\Filament\Resources\ServiceResource\Pages;

use App\Filament\Resources\ServiceResource;
use App\Filament\Support\Pipelines\ExtractCoverFromState;
use App\Filament\Support\Pipelines\ExtractGalleryFromState;
use App\Filament\Support\Pipelines\ExtractMetaFromState;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Pipeline;

class CreateService extends CreateRecord
{
    protected static string $resource = ServiceResource::class;

    protected static bool $canCreateAnother = false;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        return Pipeline::send($data)->through([
            ExtractCoverFromState::class,
            ExtractMetaFromState::class,
            ExtractGalleryFromState::class,
        ])->thenReturn();
    }

    protected function handleRecordCreation(array $data): Model
    {
        return DB::transaction(function () use ($data): Model {
            $record = parent::handleRecordCreation($data);

            $cover = ExtractCoverFromState::$cover;
            $metas = ExtractMetaFromState::$metas;
            $galleries = ExtractGalleryFromState::$galleries;

            !empty($cover) && $record->cover()->create($cover);

            $record->metas()->createMany($metas);
            $record->galleries()->createMany($galleries);

            return $record->refresh();
        });
    }
}
