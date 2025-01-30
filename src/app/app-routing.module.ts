import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './home-page/home-main/home-main.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: '', component: HomeMainComponent},
  // {path: 'buyer',
  //   loadChildren: () => import('./login-and-register-user/login-and-register-user.module').then(m => m.LoginUserModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
