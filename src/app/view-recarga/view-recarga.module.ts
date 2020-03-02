import { NgModule } from '@angular/core';
import { ViewRecargaPageRoutingModule } from './view-recarga-routing.module';
import { ViewRecargaPage } from './view-recarga.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ViewRecargaPageRoutingModule
  ],
  declarations: [ViewRecargaPage]
})
export class ViewRecargaPageModule {}
