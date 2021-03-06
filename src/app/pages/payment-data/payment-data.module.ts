import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentDataPageRoutingModule } from './payment-data-routing.module';

import { PaymentDataPage } from './payment-data.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentDataPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PaymentDataPage]
})
export class PaymentDataPageModule {}
