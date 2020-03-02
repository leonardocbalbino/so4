import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewTermoPageRoutingModule } from './view-termo-routing.module';

import { ViewTermoPage } from './view-termo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewTermoPageRoutingModule
  ],
  declarations: [ViewTermoPage]
})
export class ViewTermoPageModule {}
