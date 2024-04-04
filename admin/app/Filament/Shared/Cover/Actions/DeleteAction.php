<?php

declare(strict_types=1);

namespace App\Filament\Shared\Cover\Actions;

use Closure;
use Filament\Forms;
use Filament\Forms\Components\Actions\Action as BaseAction;
use Filament\Notifications\Notification;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Filesystem\FilesystemAdapter;
use Illuminate\Support\Facades\Storage;

final class DeleteAction extends BaseAction
{
    protected static FilesystemAdapter|Storage $storage;

    public static function make(?string $name = null): static
    {
        static::$storage = Storage::disk('public');

        return parent::make($name)
            ->hidden(fn (?Model $record) => !!$record?->cover === false)
            ->color('danger')
            ->label('Delete')
            ->requiresConfirmation()
            ->modalHeading('Delete cover')
            ->action(static::processDelete())
            ->after(static::afterDelete());
    }

    protected static function processDelete(): Closure
    {
        return function (Model $record): Model {
            $cover = $record->cover;

            $record->cover->delete();

            static::$storage->fileExists($cover->path) && static::$storage->delete($cover->path);

            return $record->refresh();
        };
    }

    protected static function afterDelete(): Closure
    {
        return function (Model $record, Forms\Set $set): void {
            Notification::make('cover-deleted')
                ->title('Cover Deleted')
                ->success()
                ->send();

            $set('cover.path', $record->cover?->path);
            $set('cover.title', $record->cover?->title);
            $set('cover.alt', $record->cover?->alt);
        };
    }
}
