<?php

namespace App\Filament\Resources\UserResource\Pages;

use App\Enums\Role;
use App\Filament\Resources\UserResource;
use App\Models\User;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

/**
 * TODO: Make editable role
 */
class CreateUser extends CreateRecord
{
    protected static string $resource = UserResource::class;

    protected static bool $canCreateAnother = false;

    protected function authorizeAccess(): void
    {
        abort_unless(auth()->user()->isSuperAdmin(), 403);
    }

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['password'] = $data['email'];
        $data['email_verified_at'] = now();

        return $data;
    }

    protected function handleRecordCreation(array $data): Model
    {
        return DB::transaction(function () use ($data): Model {
            /** @var User $user */
            $user = parent::handleRecordCreation($data);

            $user->assignRole(Role::Admin);

            return $user;
        });
    }

    protected function getRedirectUrl(): string
    {
        return static::getResource()::getUrl('index');
    }
}
