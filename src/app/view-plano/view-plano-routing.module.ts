import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPlanoPage } from './view-plano.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPlanoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPlanoPageRoutingModule {}
