import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlousesMainComponent } from './blouses-components/blouses-main/blouses-main.component';
import { BlouseRouteComponent } from './blouses-components/blouse-route/blouse-route.component';
import { ClothesRoteComponent } from './blouses-components/clothes-rote/clothes-rote.component';
import { FeminineRoteComponent } from './blouses-components/feminine-rote/feminine-rote.component';

const routes: Routes = [
  {path: '', component: BlousesMainComponent,
    children: [
      { path: 'roupas/blusa', component: BlouseRouteComponent },
      { path: 'roupas', component: ClothesRoteComponent },
      { path: '', component: FeminineRoteComponent },
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', redirectTo: '' }
    ]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
