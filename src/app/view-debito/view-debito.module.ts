import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewDebitoPageRoutingModule } from './view-debito-routing.module';

import { ViewDebitoPage } from './view-debito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewDebitoPageRoutingModule
  ],
  declarations: [ViewDebitoPage]
})
export class ViewDebitoPageModule {}
