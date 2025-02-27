import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemMainComponent } from './item-main/item-main.component';

const routes: Routes = [
  {path: '', component: ItemMainComponent},
  { path: ':itemName', component: ItemMainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemBuyRoutingModule { }
