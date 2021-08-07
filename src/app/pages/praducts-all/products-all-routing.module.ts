import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsAllPage } from './products-all.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsAllPageRoutingModule {}
