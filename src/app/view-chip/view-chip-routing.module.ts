import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewChipPage } from './view-chip.page';

const routes: Routes = [
  {
    path: '',
    component: ViewChipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewChipPageRoutingModule {}
