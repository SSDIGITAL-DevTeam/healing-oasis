<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Cover extends Model
{
    use HasFactory;
    use HasUuids;

    protected $connection = 'sbs_main';

    protected $guarded = [];

    public function coverable(): MorphTo
    {
        return $this->morphTo();
    }
}
