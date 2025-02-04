import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginMainComponent } from './login-components/login-main/login-main.component';
import { RegisterMainComponent } from './register-components/register-main/register-main.component';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  { path: 'login', component: LoginMainComponent },
  { path: 'register', component: RegisterMainComponent },
  { path: '**', redirectTo: 'login' },
  // {path: '', pathMatch: 'full', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginAndRegisterNewAccountRoutingModule { }
