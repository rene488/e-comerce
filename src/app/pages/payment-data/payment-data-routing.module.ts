import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentDataPage } from './payment-data.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentDataPageRoutingModule {}
