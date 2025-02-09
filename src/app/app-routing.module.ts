import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './home-page/home-main/home-main.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: ''},
  {path: '', component: HomeMainComponent},
  {path: 'user',
    loadChildren: () => import('./login-and-register-new-account/login-and-register-new-account.module').then(m => m.LoginAndRegisterNewAccountModule)
  },
  {path: 'painel-do-cliente',
    loadChildren: () => import('./customer-panel/customer-panel-routing.module').then(m => m.CustomerPanelRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
