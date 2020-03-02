import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewRecargaPage } from './view-recarga.page';

const routes: Routes = [
  {
    path: '',
    component: ViewRecargaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRecargaPageRoutingModule {}
