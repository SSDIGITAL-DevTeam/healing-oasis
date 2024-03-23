<?php

declare(strict_types=1);

namespace App\Observers;

use App\Models\Service;
use Symfony\Component\HtmlSanitizer\HtmlSanitizer;

class ServiceObserver
{
    public function __construct(protected HtmlSanitizer $htmlSanitizer)
    {
        //
    }

    public function creating(Service $service): void
    {
        $service->slug = str($service->name)->slug()->value();
        $service->description = $this->htmlSanitizer->sanitize($service->description);
    }

    public function updating(Service $service): void
    {
        $service->slug = str($service->name)->slug()->value();
        $service->description = $this->htmlSanitizer->sanitize($service->description);
    }
}
