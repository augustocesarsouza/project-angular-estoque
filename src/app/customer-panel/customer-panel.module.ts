import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerPanelRoutingModule } from './customer-panel-routing.module';
import { HeaderAndFooterLoginAndRegisterModule } from '../header-and-footer-login-and-register/header-and-footer-login-and-register.module';
import { AllSvgModule } from '../all-svg/all-svg.module';
import { ModalNewAddressComponent } from './my-account/my-account-components/address-components/modal-new-address/modal-new-address.component';
import { CustomerPanelMainComponent } from './my-account/customer-panel-main/customer-panel-main.component';
import { FirstPartCustomerPanelComponent } from './my-account/first-part-customer-panel-components/first-part-customer-panel/first-part-customer-panel.component';
import { MyAccountFirstPartCustomerPanelComponent } from './my-account/first-part-customer-panel-components/my-account-first-part-customer-panel/my-account-first-part-customer-panel.component';
import { MyOrdersFirstPartCustomerPanelComponent } from './my-account/first-part-customer-panel-components/my-orders-first-part-customer-panel/my-orders-first-part-customer-panel.component';
import { RegistrationDataComponent } from './my-account/my-account-components/registration-data/registration-data.component';
import { MyAccountComponent } from './my-account/my-account-components/my-account/my-account.component';
import { ChangePasswordComponent } from './my-account/my-account-components/change-password/change-password.component';
import { ViewAddressUserComponent } from './my-account/my-account-components/address-components/view-address-user/view-address-user.component';
import { UserAddressComponent } from './my-account/my-account-components/address-components/user-address/user-address.component';
import { OrdersComponent } from './my-orders/orders/orders.component';
import { ExchangeAndReturnComponent } from './my-orders/exchange-and-return/exchange-and-return.component';
import { ValeComponent } from './vale-purchases/vale/vale.component';
import { StreetNumberComplementNeighborhoodAndSetAsDefaultComponent } from './my-account/my-account-components/address-components/street-number-complement-neighborhood-and-set-as-default/street-number-complement-neighborhood-and-set-as-default.component';
import { NameAndPhoneNumberAndButtonEditDeleteComponent } from './my-account/my-account-components/address-components/name-and-phone-number-and-button-edit-delete/name-and-phone-number-and-button-edit-delete.component';

@NgModule({
  declarations: [
    CustomerPanelMainComponent,
    FirstPartCustomerPanelComponent,
    MyAccountFirstPartCustomerPanelComponent,
    MyOrdersFirstPartCustomerPanelComponent,
    RegistrationDataComponent,
    MyAccountComponent,
    ChangePasswordComponent,
    ViewAddressUserComponent,
    UserAddressComponent,
    ModalNewAddressComponent,
    OrdersComponent,
    ExchangeAndReturnComponent,
    ValeComponent,
    StreetNumberComplementNeighborhoodAndSetAsDefaultComponent,
    NameAndPhoneNumberAndButtonEditDeleteComponent
  ],
  imports: [
    CommonModule,
    CustomerPanelRoutingModule,
    HeaderAndFooterLoginAndRegisterModule,
    AllSvgModule
  ]
})
export class CustomerPanelModule { }
