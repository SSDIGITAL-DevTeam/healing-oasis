<?php

declare(strict_types=1);

namespace App\Models;

use App\Observers\ServiceObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;

#[ObservedBy(ServiceObserver::class)]
class Service extends Model
{
    use HasFactory;
    use HasUuids;

    protected $connection = 'sbs_main';

    protected $guarded = [];

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class);
    }

    public function cover(): MorphOne
    {
        return $this->morphOne(Cover::class, 'coverable');
    }

    public function metas(): MorphMany
    {
        return $this->morphMany(Meta::class, 'metaable');
    }

    public function galleries(): MorphMany
    {
        return $this->morphMany(Gallery::class, 'galleryable');
    }
}
