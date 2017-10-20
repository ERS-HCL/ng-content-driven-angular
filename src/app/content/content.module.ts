import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTENT_MAPPINGS } from '../reactive-content';
import { HeadlineComponent } from './headline/headline.component';
import { ImageComponent } from './image/image.component';
import { GridComponent } from './grid/grid.component';
import { PageComponent } from './page/page.component';
import { GridColumnComponent } from './grid/grid-column.component';
import { GridRowComponent } from './grid/grid-row.component';
import { SliderComponent } from './slider/slider.component';
import { SliderImageComponent } from './slider/slider-image.component';
import { ArticleComponent } from './article/article.component';
import { TilesComponent } from './tiles/tiles.component';
import { TileComponent } from './tiles/tile.component';

export const CONTENT_COMPONENTS = [
  HeadlineComponent,
  ImageComponent,
  GridComponent,
  GridColumnComponent,
  GridRowComponent,
  PageComponent,
  SliderComponent,
  SliderImageComponent,
  ArticleComponent,
  TilesComponent,
  TileComponent
];

export const CONTENT_MAPPINGS_PROVIDER: Provider = [
  {
    provide: CONTENT_MAPPINGS,
    useValue: {
      'headline': HeadlineComponent,
      'grid': GridComponent,
      'column': GridColumnComponent,
      'row': GridRowComponent,
      'image': ImageComponent,
      'page': PageComponent,
      'slider': SliderComponent,
      'slider-image': SliderImageComponent,
      'article': ArticleComponent,
      'tiles': TilesComponent,
      'tile': TileComponent
    }
  }
];


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...CONTENT_COMPONENTS,
    PageComponent
  ],
  entryComponents: [
    ...CONTENT_COMPONENTS
  ]
})
export class ContentModule {

  public static forRoot(): ModuleWithProviders {

    return {
      ngModule: ContentModule,
      providers: [
        CONTENT_MAPPINGS_PROVIDER
      ]
    };
  }

}
