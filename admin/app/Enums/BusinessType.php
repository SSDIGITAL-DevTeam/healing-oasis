<?php

declare(strict_types=1);

namespace App\Enums;

use App\Enums\Contracts\HasValues;
use App\Enums\Traits\InteractsWithValues;
use Closure;

enum BusinessType: string implements HasValues
{
    use InteractsWithValues;

    case SpaAndWellnessCenters = 'Spa and Wellness Centers';
    case MedicalAndHealthCare = 'Medical and Healthcare';
    case SalonAndBarbershop = 'Salons and Barbershops';
    case FitnessStudiosAndGym = 'Fitness Studios and Gyms';
    case PhotographyStudios = 'Photography Studios';
    case PetClinic = 'Pet Clinic';

    public static function toArray(): array
    {
        return static::normalize(function (array $types, array $normalizedType): array {
            foreach ($types as $type) {
                $normalizedType[$type->value] = $type->value;
            }

            return $normalizedType;
        });
    }

    protected static function normalize(Closure $closure): mixed
    {
        return $closure(self::cases(), []);
    }
}
