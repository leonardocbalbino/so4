import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewTrocaIMPage } from './view-troca-i-m.page';

const routes: Routes = [
  {
    path: '',
    component: ViewTrocaIMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewTrocaIMPageRoutingModule {}
