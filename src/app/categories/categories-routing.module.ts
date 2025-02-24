import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlousesMainComponent } from './blouses-components/blouses-main/blouses-main.component';

const routes: Routes = [
  {path: 'roupas/blusa', component: BlousesMainComponent},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
