import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewDadosPage } from './view-dados.page';

const routes: Routes = [
  {
    path: '',
    component: ViewDadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewDadosPageRoutingModule {}
