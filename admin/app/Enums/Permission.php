<?php

declare(strict_types=1);

namespace App\Enums;

use App\Enums\Contracts\HasValues;
use App\Enums\Traits\InteractsWithValues;

enum Permission: string implements HasValues
{
    use InteractsWithValues;

    // User related permissions
    case ViewUsers = 'view users';
    case ViewUser = 'view user';
    case CreateUser = 'create user';
    case UpdateUser = 'update user';
    case DeleteUser = 'delete user';

    // Category related permissions
    case ViewCategories = 'view categories';
    case ViewCategory = 'view category';
    case CreateCategory = 'create category';
    case UpdateCategory = 'update category';
    case DeleteCategory = 'delete category';

    // Service related permissions
    case ViewServices = 'view services';
    case ViewService = 'view service';
    case CreateService = 'create service';
    case UpdateService = 'update service';
    case DeleteService = 'delete service';
}
