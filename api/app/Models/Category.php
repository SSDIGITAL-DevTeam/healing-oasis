<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Category extends Model
{
    use HasFactory;
    use HasUuids;

    protected $guarded = [];

    public function services(): BelongsToMany
    {
        return $this->belongsToMany(Service::class);
    }

    public function cover(): MorphOne
    {
        return $this->morphOne(Cover::class, 'coverable');
    }

    public function metas(): MorphMany
    {
        return $this->morphMany(Meta::class, 'metaable');
    }
}
