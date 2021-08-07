import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentDataPageRoutingModule } from './payment-data-routing.module';

import { PaymentDataPage } from './payment-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentDataPageRoutingModule
  ],
  declarations: [PaymentDataPage]
})
export class PaymentDataPageModule {}
