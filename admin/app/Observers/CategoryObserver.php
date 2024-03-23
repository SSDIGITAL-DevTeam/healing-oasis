<?php

declare(strict_types=1);

namespace App\Observers;

use App\Models\Category;
use Symfony\Component\HtmlSanitizer\HtmlSanitizer;

class CategoryObserver
{
    public function __construct(protected HtmlSanitizer $htmlSanitizer)
    {
        //
    }

    public function creating(Category $category): void
    {
        $category->slug = str($category->name)->slug()->value();
        $category->description = $this->htmlSanitizer->sanitize($category->description);
    }

    public function updating(Category $category): void
    {
        $category->slug = str($category->name)->slug()->value();
        $category->description = $this->htmlSanitizer->sanitize($category->description);
    }
}
