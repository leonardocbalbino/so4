import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewDebitoPage } from './view-debito.page';

const routes: Routes = [
  {
    path: '',
    component: ViewDebitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewDebitoPageRoutingModule {}
