import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewDadosPageRoutingModule } from './view-dados-routing.module';

import { ViewDadosPage } from './view-dados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewDadosPageRoutingModule
  ],
  declarations: [ViewDadosPage]
})
export class ViewDadosPageModule {}
