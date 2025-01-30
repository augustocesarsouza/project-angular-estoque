import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeMainComponent } from './home-main/home-main.component';
import { HeaderAndFooterMainModule } from '../header-and-footer-main/header-and-footer-main.module';

@NgModule({
  declarations: [
    HomeMainComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    HeaderAndFooterMainModule
  ]
})
export class HomePageModule { }
