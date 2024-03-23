<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CategoryResource\Pages;
use App\Filament\Shared\Cover\Actions\DeleteAction as CoverDeleteAction;
use App\Models\Category;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class CategoryResource extends Resource
{
    protected static ?string $model = Category::class;

    protected static ?string $navigationGroup = 'Service Management';

    protected static ?string $navigationIcon = 'heroicon-o-tag';

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
                        ]),
                ]),

                Forms\Components\Group::make([
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
                    ->columns(),
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
                    ->label('New category')
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
            'index' => Pages\ListCategories::route('/'),
            'create' => Pages\CreateCategory::route('/create'),
            'edit' => Pages\EditCategory::route('/{record}/edit'),
        ];
    }
}
