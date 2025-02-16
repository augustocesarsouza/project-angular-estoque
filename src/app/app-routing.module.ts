import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeMainComponent } from './home-page/home-main/home-main.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: ''},
  // {path: '', component: HomeMainComponent},
  {path: '',
    loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
  },
  {path: 'user',
    loadChildren: () => import('./login-and-register-new-account/login-and-register-new-account.module').then(m => m.LoginAndRegisterNewAccountModule)
  },
  {path: 'painel-do-cliente',
    loadChildren: () => import('./customer-panel/customer-panel.module').then(m => m.CustomerPanelModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
