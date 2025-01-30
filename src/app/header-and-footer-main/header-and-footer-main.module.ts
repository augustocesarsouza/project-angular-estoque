import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header-main/header/header.component';
import { HeaderFirstComponent } from './header-main/header-first/header-first.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderFirstComponent
  ],
  exports: [HeaderComponent],
  imports: [
    CommonModule
  ]
})
export class HeaderAndFooterMainModule { }
