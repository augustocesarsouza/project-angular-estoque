import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeMainComponent } from './home-main/home-main.component';

@NgModule({
  declarations: [
    HomeMainComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
