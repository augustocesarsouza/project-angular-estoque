import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginAndRegisterNewAccountRoutingModule } from './login-and-register-new-account-routing.module';
import { LoginMainComponent } from './login-components/login-main/login-main.component';
import { RegisterMainComponent } from './register-components/register-main/register-main.component';
import { HeaderAndFooterLoginAndRegisterModule } from './header-and-footer-login-and-register/header-and-footer-login-and-register.module';

@NgModule({
  declarations: [
    LoginMainComponent,
    RegisterMainComponent
  ],
  imports: [
    CommonModule,
    LoginAndRegisterNewAccountRoutingModule,
    HeaderAndFooterLoginAndRegisterModule
  ]
})
export class LoginAndRegisterNewAccountModule { }
