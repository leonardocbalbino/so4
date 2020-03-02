import { NgModule } from '@angular/core';
import { ViewPlanoPageRoutingModule } from './view-plano-routing.module';
import { ViewPlanoPage } from './view-plano.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ViewPlanoPageRoutingModule
  ],
  declarations: [ViewPlanoPage]
})
export class ViewPlanoPageModule {}
