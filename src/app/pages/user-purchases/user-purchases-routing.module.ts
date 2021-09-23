import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPurchasesPage } from './user-purchases.page';

const routes: Routes = [
  {
    path: '',
    component: UserPurchasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPurchasesPageRoutingModule {}
