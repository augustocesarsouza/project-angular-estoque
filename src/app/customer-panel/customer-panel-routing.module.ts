import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerPanelMainComponent } from './customer-panel-main/customer-panel-main.component';
import { RegistrationDataComponent } from './my-account-components/registration-data/registration-data.component';
import { MyAccountComponent } from './my-account-components/my-account/my-account.component';
import { ChangePasswordComponent } from './my-account-components/change-password/change-password.component';

const routes: Routes = [
  { path: '', component:  CustomerPanelMainComponent,
    children: [
      { path: '', component: MyAccountComponent },
      { path: 'dados-cadastrais', component: RegistrationDataComponent },
      { path: 'alterar-senha', component: ChangePasswordComponent },
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
