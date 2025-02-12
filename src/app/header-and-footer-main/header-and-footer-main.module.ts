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
import { AllNavCategoryComponent } from './header-main/all-nav-category/all-nav-category.component';
import { SvgArrowTopCategoryComponent } from './header-main/svg-arrow-top-category/svg-arrow-top-category.component';
import { ModalNewsComponent } from './header-main/modal-news/modal-news.component';
import { ModalFeminineComponent } from './header-main/modal-feminine/modal-feminine.component';
import { ModalMasculineComponent } from './header-main/modal-masculine/modal-masculine.component';
import { ModalChildrenComponent } from './header-main/modal-children/modal-children.component';
import { ModalHomeComponent } from './header-main/modal-home/modal-home.component';
import { ModalBranchComponent } from './header-main/modal-branch/modal-branch.component';
import { BranchLelisLelisHomeImgBoboComponent } from './header-main/branch-lelis-lelis-home-img-bobo/branch-lelis-lelis-home-img-bobo.component';
import { ModalAccountLogInComponent } from './header-main/modal-account-log-in/modal-account-log-in.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderFirstComponent,
    HeaderSecondComponent,
    SvgArrowTopComponent,
    AccountFavoritesBagComponent,
    ModalAccountComponent,
    BagEmptyComponent,
    AllNavCategoryComponent,
    SvgArrowTopCategoryComponent,
    ModalNewsComponent,
    ModalFeminineComponent,
    ModalMasculineComponent,
    ModalChildrenComponent,
    ModalHomeComponent,
    ModalBranchComponent,
    BranchLelisLelisHomeImgBoboComponent,
    ModalAccountLogInComponent
  ],
  exports: [HeaderComponent],
  imports: [
    CommonModule, AllSvgModule
  ]
})
export class HeaderAndFooterMainModule { }
