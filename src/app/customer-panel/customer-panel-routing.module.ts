import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerPanelMainComponent } from './my-account/customer-panel-main/customer-panel-main.component';
import { MyAccountComponent } from './my-account/my-account-components/my-account/my-account.component';
import { RegistrationDataComponent } from './my-account/my-account-components/registration-data/registration-data.component';
import { ChangePasswordComponent } from './my-account/my-account-components/change-password/change-password.component';
import { UserAddressComponent } from './my-account/my-account-components/address-components/user-address/user-address.component';
import { OrdersComponent } from './my-orders/orders/orders.component';
import { ExchangeAndReturnComponent } from './my-orders/exchange-and-return/exchange-and-return.component';
import { ValeComponent } from './vale-purchases/vale/vale.component';

const routes: Routes = [
  { path: '', component:  CustomerPanelMainComponent,
    children: [
      { path: '', component: MyAccountComponent },
      { path: 'dados-cadastrais', component: RegistrationDataComponent },
      { path: 'alterar-senha', component: ChangePasswordComponent },
      { path: 'enderecos', component: UserAddressComponent },
      { path: 'pedidos', component: OrdersComponent },
      { path: 'vales', component: ValeComponent },
      {
        path: 'troca-e-devolucao',
        children: [
          {path: 'listar', component: ExchangeAndReturnComponent}
        ]
      },
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', redirectTo: '' }
    ]

   },
  // { path: 'register', component: RegisterMainComponent },
  { path: '**', redirectTo: '' },
  // {path: '', pathMatch: 'full', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerPanelRoutingModule { }
