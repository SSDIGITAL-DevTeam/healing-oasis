<?php

declare(strict_types=1);

namespace App\Enums;

use App\Enums\Contracts\HasValues;
use App\Enums\Traits\InteractsWithValues;

enum BusinessType: string implements HasValues
{
    use InteractsWithValues;

    case Spa = 'spa';
    case CarWash = 'car wash';
    case Barbershop = 'barbershop';
    case BeautyClinic = 'beauty clinic';
    case Vet = 'vet';

    public static function toArray(): array
    {
        return [
            self::Spa->value => str(self::Spa->value)->title()->value(),
            self::CarWash->value => str(self::CarWash->value)->title()->value(),
            self::Barbershop->value => str(self::Barbershop->value)->title()->value(),
            self::BeautyClinic->value => str(self::BeautyClinic->value)->title()->value(),
            self::Vet->value => str(self::Vet->value)->title()->value(),
        ];
    }
}
