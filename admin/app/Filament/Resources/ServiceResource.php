<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CategoryResource\Pages\CreateCategory;
use App\Filament\Resources\ServiceResource\Pages;
use App\Filament\Shared\Cover\Actions\DeleteAction as CoverDeleteAction;
use App\Models\Category;
use App\Models\Service;
use Filament\Forms;
use Filament\Forms\Components\Actions\Action;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Support\Enums\MaxWidth;
use Filament\Support\RawJs;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Arr;

class ServiceResource extends Resource
{
    protected static ?string $model = Service::class;

    protected static ?string $navigationGroup = 'Service Management';

    protected static ?string $navigationIcon = 'heroicon-o-list-bullet';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Group::make([
                    Forms\Components\Section::make()
                        ->schema([
                            Forms\Components\TextInput::make('name')
                                ->required()
                                ->unique(ignoreRecord: true)
                                ->afterStateUpdated(fn (Forms\Set $set, ?string $state) => $set('slug', str($state)->slug()->value()))
                                ->live(onBlur: true),

                            Forms\Components\RichEditor::make('description')
                                ->fileAttachmentsDisk('public')
                                ->fileAttachmentsDirectory('category/attachment')
                                ->required()
                                ->columnSpanFull(),

                            Forms\Components\TextInput::make('price')
                                ->mask(RawJs::make('$money($input)'))
                                ->prefix('S$')
                                ->stripCharacters([',', '.'])
                                ->numeric()
                                ->required(),

                            Forms\Components\Select::make('categories')
                                ->relationship('categories', 'name')
                                ->searchable()
                                ->multiple()
                                ->options(Category::pluck('name', 'id'))
                                ->optionsLimit(5)
                                ->required()
                                ->createOptionForm(fn (Form $form) => CategoryResource::form($form))
                                ->createOptionModalHeading('Create category')
                                ->createOptionAction(function (Action $action): Action {
                                    return $action
                                        ->modalWidth(MaxWidth::FitContent)
                                        ->stickyModalHeader()
                                        ->stickyModalFooter()
                                        ->extraModalFooterActions([]);
                                })
                                ->createOptionUsing(function (array $data, CreateCategory $createCategory): string {
                                    $data['cover']['path'] = Arr::wrap($data['cover']['path']);
                                    $data['metas']['image'] = Arr::wrap($data['metas']['image']);

                                    $createCategory->data = $data;

                                    $createCategory->create();

                                    return $createCategory->getRecord()->getKey();
                                }),
                        ]),
                ]),

                Forms\Components\Group::make([
                    Forms\Components\Section::make()
                        ->schema([
                            Forms\Components\Toggle::make('is_active')
                                ->label('Active')
                                ->default(true)
                                ->required()
                                ->live()
                                ->helperText(fn (Forms\Get $get) => $get('is_active') ? 'The service will be shown in the website.' : 'The service will not be shown in the website.'),
                        ]),

                    Forms\Components\Section::make('Image')
                        ->headerActions([
                            CoverDeleteAction::make('delete-cover'),
                        ])
                        ->schema([
                            Forms\Components\FileUpload::make('cover.path')
                                ->label('Cover')
                                ->disk('public')
                                ->directory('covers')
                                ->rules(['image'])
                                ->image()
                                ->imageEditor()
                                ->columnSpanFull(),

                            Forms\Components\TextInput::make('cover.title')
                                ->requiredWith('cover.path')
                                ->maxLength(255)
                                ->disabled(fn (Forms\Get $get) => !!$get('cover.path') === false),

                            Forms\Components\TextInput::make('cover.alt')
                                ->label('Alt text')
                                ->hintIcon('heroicon-o-question-mark-circle')
                                ->hintIconTooltip('Provide an alternate text for the image.')
                                ->requiredWith('cover.path')
                                ->maxLength(255)
                                ->disabled(fn (Forms\Get $get) => !!$get('cover.path') === false),
                        ]),
                ]),

                Forms\Components\Section::make('Galleries')
                    ->schema([
                        Forms\Components\Repeater::make('galleries')
                            ->addActionLabel('Add Gallery')
                            ->itemLabel('Gallery')
                            ->hiddenLabel()
                            ->reorderable(false)
                            ->default([])
                            ->schema([
                                Forms\Components\FileUpload::make('path')
                                    ->disk('public')
                                    ->directory('galleries')
                                    ->rules(['image'])
                                    ->image()
                                    ->imageEditor()
                                    ->hiddenLabel(true),

                                Forms\Components\TextInput::make('title')
                                    ->requiredWith('path')
                                    ->maxLength(255)
                                    ->disabled(fn (Forms\Get $get) => !!$get('path') === false),

                                Forms\Components\TextInput::make('alt')
                                    ->label('Alt text')
                                    ->hintIcon('heroicon-o-question-mark-circle')
                                    ->hintIconTooltip('Provide an alternate text for the image.')
                                    ->requiredWith('path')
                                    ->maxLength(255)
                                    ->disabled(fn (Forms\Get $get) => !!$get('path') === false),
                            ])
                            ->grid(3),
                    ])
                    ->collapsible(),

                Forms\Components\Section::make('SEO')
                    ->schema([
                        Forms\Components\TextInput::make('metas.title')
                            ->nullable()
                            ->default('')
                            ->maxLength(255),

                        Forms\Components\TextInput::make('metas.keywords')
                            ->nullable()
                            ->default('')
                            ->maxLength(255),

                        Forms\Components\Textarea::make('metas.description')
                            ->rows(4)
                            ->autosize()
                            ->nullable()
                            ->default('')
                            ->maxLength(160)
                            ->helperText(fn (Forms\Get $get) => sprintf('%d characters remaining', 160 - strlen($get('metas.description'))))
                            ->live(),

                        Forms\Components\FileUpload::make('metas.image')
                            ->disk('public')
                            ->directory('meta-images')
                            ->rules(['image'])
                            ->image(),
                    ])
                    ->columns()
                    ->collapsible(),
            ])->columns();
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('cover.path')
                    ->toggleable()
                    ->defaultImageUrl('https://via.placeholder.com/150'),

                Tables\Columns\TextColumn::make('name')
                    ->searchable()
                    ->sortable()
                    ->toggleable(),

                Tables\Columns\TextColumn::make('categories.name')
                    ->badge()
                    ->searchable()
                    ->toggleable(),

                Tables\Columns\ToggleColumn::make('is_active')
                    ->label('Active'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ActionGroup::make([
                    Tables\Actions\EditAction::make(),
                ]),
            ])
            ->emptyStateIcon(static::$navigationIcon)
            ->emptyStateActions([
                Tables\Actions\Action::make('create')
                    ->label('New service')
                    ->url(static::getUrl('create'))
                    ->icon('heroicon-m-plus')
                    ->button(),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListServices::route('/'),
            'create' => Pages\CreateService::route('/create'),
            'edit' => Pages\EditService::route('/{record}/edit'),
        ];
    }
}
