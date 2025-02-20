import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeMainComponent } from './home-main/home-main.component';
import { HeaderAndFooterMainModule } from '../header-and-footer-main/header-and-footer-main.module';
import { ImgHighlightMainComponent } from './imgs-highlight-components/img-highlight-main/img-highlight-main.component';
import { BrowseThroughCategoriesMainComponent } from './browse-through-categories-components/browse-through-categories-main/browse-through-categories-main.component';

@NgModule({
  declarations: [
    HomeMainComponent,
    ImgHighlightMainComponent,
    BrowseThroughCategoriesMainComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    HeaderAndFooterMainModule
  ]
})
export class HomePageModule { }
