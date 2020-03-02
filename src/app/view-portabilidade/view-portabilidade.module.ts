import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPortabilidadePageRoutingModule } from './view-portabilidade-routing.module';

import { ViewPortabilidadePage } from './view-portabilidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPortabilidadePageRoutingModule
  ],
  declarations: [ViewPortabilidadePage]
})
export class ViewPortabilidadePageModule {}
