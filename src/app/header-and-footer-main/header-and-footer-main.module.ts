import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header-main/header/header.component';
import { HeaderFirstComponent } from './header-main/header-first/header-first.component';
import { AllSvgModule } from '../all-svg/all-svg.module';
import { HeaderSecondComponent } from './header-main/header-second/header-second.component';
import { SvgArrowTopComponent } from './header-main/svg-arrow-top/svg-arrow-top.component';
import { AccountFavoritesBagComponent } from './header-main/account-favorites-bag/account-favorites-bag.component';
import { ModalAccountComponent } from './header-main/modal-account/modal-account.component';
import { BagEmptyComponent } from './header-main/bag-empty/bag-empty.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderFirstComponent,
    HeaderSecondComponent,
    SvgArrowTopComponent,
    AccountFavoritesBagComponent,
    ModalAccountComponent,
    BagEmptyComponent
  ],
  exports: [HeaderComponent],
  imports: [
    CommonModule, AllSvgModule
  ]
})
export class HeaderAndFooterMainModule { }
