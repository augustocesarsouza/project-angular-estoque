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
import { ReviewsMainComponent } from './reviews-components/reviews-main/reviews-main.component';
import { ModalReviewsComponent } from './reviews-components/modal-reviews/modal-reviews.component';
import { ReviewTypeComponent } from './reviews-components/review-type/review-type.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { BannerItemComponent } from './banner-item/banner-item.component';
import { YouWouldLikeReceiverNewsComponent } from './you-would-like-receiver-news/you-would-like-receiver-news.component';
import { FormsModule } from '@angular/forms';

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
    ProductDetailsAndExchangesAndReturnsMainComponent,
    ReviewsMainComponent,
    ModalReviewsComponent,
    ReviewTypeComponent,
    BannerItemComponent,
    YouWouldLikeReceiverNewsComponent
  ],
  imports: [
    CommonModule,
    ItemBuyRoutingModule,
    HeaderAndFooterMainModule,
    AllSvgModule,
    HeaderAndFooterLoginAndRegisterModule,
    RecaptchaModule,
    FormsModule
  ]
})
export class ItemBuyModule { }
