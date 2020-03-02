import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewTermoPage } from './view-termo.page';

const routes: Routes = [
  {
    path: '',
    component: ViewTermoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewTermoPageRoutingModule {}
