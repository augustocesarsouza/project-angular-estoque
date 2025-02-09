import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginAndRegisterNewAccountRoutingModule } from './login-and-register-new-account-routing.module';
import { LoginMainComponent } from './login-components/login-main/login-main.component';
import { RegisterMainComponent } from './register-components/register-main/register-main.component';
import { AllSvgModule } from '../all-svg/all-svg.module';
import { LoginComponent } from './login-components/login/login.component';
import { CreateAccountComponent } from './login-components/create-account/create-account.component';
import { FirstPartRegisterComponent } from './register-components/first-part-register-components/first-part-register/first-part-register.component';
import { SecondPartRegisterMainComponent } from './register-components/second-part-register-components/second-part-register-main/second-part-register-main.component';
import { MyAccountFirstPartComponent } from './register-components/first-part-register-components/my-account-first-part/my-account-first-part.component';
import { MyOrdersFirstPartComponent } from './register-components/first-part-register-components/my-orders-first-part/my-orders-first-part.component';
import { HeaderAndFooterLoginAndRegisterModule } from '../header-and-footer-login-and-register/header-and-footer-login-and-register.module';

@NgModule({
  declarations: [
    LoginMainComponent,
    RegisterMainComponent,
    LoginComponent,
    CreateAccountComponent,
    FirstPartRegisterComponent,
    SecondPartRegisterMainComponent,
    MyAccountFirstPartComponent,
    MyOrdersFirstPartComponent,
  ],
  imports: [
    CommonModule,
    LoginAndRegisterNewAccountRoutingModule,
    HeaderAndFooterLoginAndRegisterModule,
    AllSvgModule
  ]
})
export class LoginAndRegisterNewAccountModule { }
