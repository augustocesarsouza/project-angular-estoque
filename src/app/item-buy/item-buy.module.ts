import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemBuyRoutingModule } from './item-buy-routing.module';
import { ItemMainComponent } from './item-main/item-main.component';
import { AllSvgModule } from '../all-svg/all-svg.module';
import { HeaderAndFooterMainModule } from '../header-and-footer-main/header-and-footer-main.module';
import { BrowsingRoteComponent } from './browsing-rote/browsing-rote.component';

@NgModule({
  declarations: [
    ItemMainComponent,
    BrowsingRoteComponent
  ],
  imports: [
    CommonModule,
    ItemBuyRoutingModule,
    HeaderAndFooterMainModule,
    AllSvgModule,
  ]
})
export class ItemBuyModule { }
