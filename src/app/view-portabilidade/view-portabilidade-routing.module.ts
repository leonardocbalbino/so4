import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPortabilidadePage } from './view-portabilidade.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPortabilidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPortabilidadePageRoutingModule {}
