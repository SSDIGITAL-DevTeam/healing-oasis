<?php

namespace App\Filament\Pages;

use App\Enums\BusinessType;
use App\Models\Setting;
use Cheesegrits\FilamentGoogleMaps\Fields\Geocomplete;
use Exception;
use Filament\Actions;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Pages\Concerns\InteractsWithFormActions;
use Filament\Pages\Page;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Ysfkaya\FilamentPhoneInput\Forms\PhoneInput;

/**
 * @property Form $form
 */
class Settings extends Page
{
    use InteractsWithFormActions;

    public ?array $data = [
        'business_phone' => '',
    ];

    protected static ?string $navigationIcon = 'heroicon-o-cog-6-tooth';

    protected static string $view = 'filament.pages.settings';

    public function mount()
    {
        $records = Setting::all();

        $this->form->fill([
            'business_name' => $records->where('key', 'business_name')->first()?->value ?? null,
            'business_type' => $records->where('key', 'business_type')->first()?->value ?? null,
            'business_logo' => $records->where('key', 'business_logo')->first()?->value ?? null,
            'business_phone' => $records->where('key', 'business_phone')->first()?->value ?? null,
            'location' => $records->where('key', 'business_location')->first()?->value ?? null,
        ]);
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Business Information')
                    ->schema([
                        Forms\Components\TextInput::make('business_name')
                            ->required()
                            ->maxLength(255),

                        Forms\Components\Select::make('business_type')
                            ->options(BusinessType::toArray())
                            ->native(false)
                            ->required(),

                        Forms\Components\FileUpload::make('business_logo')
                            ->image()
                            ->rules(['image', 'dimensions:ratio=1/1'])
                            ->disk('public')
                            ->directory('business_logos')
                            ->hintIcon('heroicon-o-information-circle')
                            ->hintIconTooltip('The image file must be equal dimensions (e.g., square or a 1:1 aspect ratio)'),

                        PhoneInput::make('business_phone')
                            ->required()
                            ->rule('phone'),

                        Geocomplete::make('location')
                            ->label('Business Location')
                            ->required(),
                    ])
                    ->inlineLabel(),
            ])
            ->statePath('data');
    }

    public function getFormActions(): array
    {
        return [
            Actions\Action::make('save')
                ->label('Save changes')
                ->action(function (): void {
                    try {
                        DB::beginTransaction();

                        $data = $this->form->getState();

                        $data['business_location'] = $data['location'];

                        unset($data['location']);

                        $oldSettingImage = null;
                        $storage = Storage::disk('public');

                        foreach ($data as $key => $value) {
                            if ($key === 'business_logo') {
                                $oldSettingImage = Setting::where('key', $key)->first()?->value ?? '';
                            }

                            Setting::where('key', $key)->update(['value' => $value]);
                        }

                        $oldSettingImage !== $data['business_logo'] && $storage->exists($oldSettingImage) && $storage->delete($oldSettingImage);

                        Notification::make('updated')
                            ->success()
                            ->title('Settings Updated')
                            ->send();

                        DB::commit();
                    } catch (Exception $e) {
                        DB::rollBack();

                        Notification::make('failed')
                            ->danger()
                            ->title($e->getMessage())
                            ->send();
                    }
                }),
        ];
    }

    public static function shouldRegisterNavigation(): bool
    {
        return auth()->user()->isSuperAdmin();
    }

    public static function canAccess(): bool
    {
        return auth()->user()->isSuperAdmin();
    }
}
