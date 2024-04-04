<?php

namespace App\Filament\Pages;

use App\Enums\BusinessType;
use App\Enums\Role;
use App\Models\Setting;
use App\Models\User;
use Cheesegrits\FilamentGoogleMaps\Fields\Geocomplete;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Pages\Concerns\InteractsWithFormActions;
use Filament\Pages\SimplePage;
use Filament\Support\Enums\MaxWidth;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\HtmlString;
use Illuminate\Validation\Rules\Password;
use Ysfkaya\FilamentPhoneInput\Forms\PhoneInput;

class InitialSetup extends SimplePage
{
    use InteractsWithFormActions;

    public ?array $data = [
        'business_phone' => '',
    ];

    protected static string $view = 'filament.pages.initial-setup';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Wizard::make([
                    Forms\Components\Wizard\Step::make('Business Information')
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
                                ->helperText('The image file must be equal dimensions (e.g., square or a 1:1 aspect ratio)'),

                            PhoneInput::make('business_phone')
                                ->required()
                                ->rule('phone'),

                            Geocomplete::make('location')
                                ->label('Business Location')
                                ->required(),
                        ])
                        ->description('Enter your business information')
                        ->icon('heroicon-o-building-office-2'),

                    Forms\Components\Wizard\Step::make('Super Admin')
                        ->schema([
                            Forms\Components\TextInput::make('name')
                                ->required()
                                ->maxLength(255),

                            Forms\Components\TextInput::make('email')
                                ->required()
                                ->maxLength(255)
                                ->email(),

                            Forms\Components\TextInput::make('password')
                                ->required()
                                ->password()
                                ->revealable(filament()->arePasswordsRevealable())
                                ->rule(Password::default())
                                ->dehydrateStateUsing(fn ($state): string => Hash::make($state))
                                ->confirmed(),

                            Forms\Components\TextInput::make('password_confirmation')
                                ->label('Confirm Password')
                                ->required()
                                ->password()
                                ->revealable(filament()->arePasswordsRevealable())
                                ->rule(Password::default())
                                ->same('password'),
                        ])
                        ->description('Enter your super admin information')
                        ->icon('heroicon-o-user'),
                ])
                    ->submitAction(new HtmlString(Blade::render(<<<BLADE
                    <x-filament::button
                        type="submit"
                        size="sm"
                    >
                        Submit
                    </x-filament::button>
                BLADE))),
            ])
            ->statePath('data');
    }

    public function getMaxWidth(): null|MaxWidth|string
    {
        return MaxWidth::ThreeExtraLarge;
    }

    public function save(): void
    {
        $user = DB::transaction(function (): User {
            $data = $this->form->getState();

            $settings = $this->normalizeSettings($data);

            Setting::query()->getQuery()->insert($settings);

            unset($data['password_confirmation']);

            $data['email_verified_at'] = now();

            return User::create($data);
        });

        $user->assignRole(Role::SuperAdmin);

        filament()->auth()->login($user);

        session()->regenerate();

        Notification::make('saved')
            ->success()
            ->title('Initial Setup Completed')
            ->send();

        $this->redirectIntended(filament()->getUrl(), true);
    }

    protected function normalizeSettings(array &$data): array
    {
        $normalizedSettings = [];

        foreach ($data as $key => $value) {
            if ($key === 'location' || str_starts_with($key, 'business_')) {
                $normalizedSettings[] = [
                    'id' => str()->orderedUuid(),
                    'key' => $key === 'location' ? 'business_location' : $key,
                    'value' => $value,
                ];

                unset($data[$key]);
            }
        }

        return $normalizedSettings;
    }
}
