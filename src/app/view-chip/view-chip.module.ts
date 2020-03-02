import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewChipPageRoutingModule } from './view-chip-routing.module';

import { ViewChipPage } from './view-chip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewChipPageRoutingModule
  ],
  declarations: [ViewChipPage]
})
export class ViewChipPageModule {}
