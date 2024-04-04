<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class() extends Migration
{
    public function up(): void
    {
        Schema::create('covers', function (Blueprint $table): void {
            $table->uuid('id')->primary();
            $table->uuidMorphs('coverable');
            $table->string('title');
            $table->string('alt');
            $table->string('path');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('covers');
    }
};
