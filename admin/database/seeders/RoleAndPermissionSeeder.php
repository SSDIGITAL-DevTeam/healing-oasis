<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Enums\Permission as PermissionEnum;
use App\Enums\Role as RoleEnum;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleAndPermissionSeeder extends Seeder
{
    public function run(): void
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        $permissions = collect(PermissionEnum::cases())->map(fn (PermissionEnum $permission) => Permission::create(['name' => $permission->value]));
        $roles = collect(RoleEnum::cases())->map(fn (RoleEnum $role) => Role::create(['name' => $role->value]));

        /** @var Role $superAdminRole */
        $superAdminRole = $roles->where('name', RoleEnum::SuperAdmin->value)->first();

        /** @var Role $adminRole */
        $adminRole = $roles->where('name', RoleEnum::Admin->value)->first();

        $superAdminRole->givePermissionTo($permissions);
        $adminRole->givePermissionTo($permissions->filter(fn (Permission $permission) => !str_contains($permission->name, 'user')));
        $adminRole->givePermissionTo($permissions->filter(fn (Permission $permission) => in_array($permission->name, [PermissionEnum::ViewUsers->value, PermissionEnum::ViewUser->value])));
    }
}
