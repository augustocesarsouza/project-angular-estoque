import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMainComponent } from './header-components/header-main/header-main.component';
import { FooterMainComponent } from './footer-components/footer-main/footer-main.component';

@NgModule({
  declarations: [
    HeaderMainComponent,
    FooterMainComponent
  ],
  exports: [HeaderMainComponent, FooterMainComponent],
  imports: [CommonModule]
})
export class HeaderAndFooterLoginAndRegisterModule { }
