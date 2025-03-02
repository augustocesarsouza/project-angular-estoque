import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemBuyRoutingModule } from './item-buy-routing.module';
import { ItemMainComponent } from './item-main/item-main.component';
import { AllSvgModule } from '../all-svg/all-svg.module';
import { HeaderAndFooterMainModule } from '../header-and-footer-main/header-and-footer-main.module';
import { BrowsingRoteComponent } from './browsing-rote/browsing-rote.component';
import { AllImgItemComponent } from './item-user-components/all-img-item/all-img-item.component';
import { ImgShowComponent } from './item-user-components/img-show/img-show.component';
import { HeaderBrandNameItemComponent } from './item-user-components/header-brand-name-item/header-brand-name-item.component';
import { PriceRealAndDiscountComponent } from './item-user-components/price-real-and-discount/price-real-and-discount.component';
import { ColorsItemComponent } from './item-user-components/colors-item/colors-item.component';
import { SizesComponent } from './item-user-components/sizes/sizes.component';
import { BuyAndHeartComponent } from './item-user-components/buy-and-heart/buy-and-heart.component';
import { TypeYourCepComponent } from './item-user-components/type-your-cep/type-your-cep.component';
import { CheckDeliveryComponent } from './item-user-components/check-delivery/check-delivery.component';
import { ItemUserMainComponent } from './item-user-components/item-user-main/item-user-main.component';
import { HeaderAndFooterLoginAndRegisterModule } from '../header-and-footer-login-and-register/header-and-footer-login-and-register.module';
import { ProductDetailsAndExchangesAndReturnsMainComponent } from './product-details-and-exchanges-and-returns-components/product-details-and-exchanges-and-returns-main/product-details-and-exchanges-and-returns-main.component';

@NgModule({
  declarations: [
    ItemMainComponent,
    BrowsingRoteComponent,
    AllImgItemComponent,
    ImgShowComponent,
    HeaderBrandNameItemComponent,
    PriceRealAndDiscountComponent,
    ColorsItemComponent,
    SizesComponent,
    BuyAndHeartComponent,
    TypeYourCepComponent,
    CheckDeliveryComponent,
    ItemUserMainComponent,
    ProductDetailsAndExchangesAndReturnsMainComponent
  ],
  imports: [
    CommonModule,
    ItemBuyRoutingModule,
    HeaderAndFooterMainModule,
    AllSvgModule,
    HeaderAndFooterLoginAndRegisterModule
  ]
})
export class ItemBuyModule { }
