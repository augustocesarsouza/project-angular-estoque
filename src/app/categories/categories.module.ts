import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { BlousesMainComponent } from './blouses-components/blouses-main/blouses-main.component';
import { HeaderAndFooterMainModule } from '../header-and-footer-main/header-and-footer-main.module';
import { AllSvgModule } from '../all-svg/all-svg.module';
import { BrowsingRoteComponent } from './blouses-components/browsing-rote/browsing-rote.component';
import { TypesToChooseComponent } from './blouses-components/category-filter-components/types-to-choose/types-to-choose.component';
import { ColorsAllComponent } from './blouses-components/category-filter-components/colors-all/colors-all.component';
import { PriceAllComponent } from './blouses-components/category-filter-components/price-all/price-all.component';
import { BrandAllComponent } from './blouses-components/category-filter-components/brand-all/brand-all.component';
import { SizeAllComponent } from './blouses-components/category-filter-components/size-all/size-all.component';
import { CategoryFilterMainComponent } from './blouses-components/category-filter-components/category-filter-main/category-filter-main.component';
import { SvgArrowBlousesComponent } from './blouses-components/svg-arrow-blouses/svg-arrow-blouses.component';
import { BlouseFirstComponent } from './blouses-components/blouse-infos-components/blouse-first/blouse-first.component';
import { BlouseInfoMainComponent } from './blouses-components/blouse-infos-components/blouse-info-main/blouse-info-main.component';
import { BlouseItemComponent } from './blouses-components/blouse-infos-components/blouse-item/blouse-item.component';
import { SelectNewsComponent } from './blouses-components/blouse-infos-components/select-news/select-news.component';
import { QuantityColumnMainComponent } from './blouses-components/blouse-infos-components/quantity-column-main/quantity-column-main.component';
import { BlouseRouteComponent } from './blouses-components/blouse-route/blouse-route.component';
import { ClothesRoteComponent } from './blouses-components/clothes-rote/clothes-rote.component';
import { FeminineRoteComponent } from './blouses-components/feminine-rote/feminine-rote.component';

@NgModule({
  declarations: [
    BlousesMainComponent,
    BrowsingRoteComponent,
    TypesToChooseComponent,
    ColorsAllComponent,
    PriceAllComponent,
    BrandAllComponent,
    SizeAllComponent,
    CategoryFilterMainComponent,
    SvgArrowBlousesComponent,
    BlouseFirstComponent,
    BlouseInfoMainComponent,
    BlouseItemComponent,
    SelectNewsComponent,
    QuantityColumnMainComponent,
    BlouseRouteComponent,
    ClothesRoteComponent,
    FeminineRoteComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    HeaderAndFooterMainModule,
    AllSvgModule,
  ]
})
export class CategoriesModule { }
