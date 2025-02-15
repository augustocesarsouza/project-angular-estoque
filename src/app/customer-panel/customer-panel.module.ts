import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerPanelRoutingModule } from './customer-panel-routing.module';
import { CustomerPanelMainComponent } from './customer-panel-main/customer-panel-main.component';
import { FirstPartCustomerPanelComponent } from './first-part-customer-panel-components/first-part-customer-panel/first-part-customer-panel.component';
import { MyAccountFirstPartCustomerPanelComponent } from './first-part-customer-panel-components/my-account-first-part-customer-panel/my-account-first-part-customer-panel.component';
import { MyOrdersFirstPartCustomerPanelComponent } from './first-part-customer-panel-components/my-orders-first-part-customer-panel/my-orders-first-part-customer-panel.component';
import { HeaderAndFooterLoginAndRegisterModule } from '../header-and-footer-login-and-register/header-and-footer-login-and-register.module';
import { RegistrationDataComponent } from './my-account-components/registration-data/registration-data.component';
import { MyAccountComponent } from './my-account-components/my-account/my-account.component';
import { ChangePasswordComponent } from './my-account-components/change-password/change-password.component';

@NgModule({
  declarations: [
    CustomerPanelMainComponent,
    FirstPartCustomerPanelComponent,
    MyAccountFirstPartCustomerPanelComponent,
    MyOrdersFirstPartCustomerPanelComponent,
    RegistrationDataComponent,
    MyAccountComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    CustomerPanelRoutingModule,
    HeaderAndFooterLoginAndRegisterModule,
  ]
})
export class CustomerPanelModule { }
