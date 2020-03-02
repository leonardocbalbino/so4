import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewTrocaIMPageRoutingModule } from './view-troca-i-m-routing.module';

import { ViewTrocaIMPage } from './view-troca-i-m.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewTrocaIMPageRoutingModule
  ],
  declarations: [ViewTrocaIMPage]
})
export class ViewTrocaIMPageModule {}
