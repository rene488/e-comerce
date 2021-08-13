import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsAllPageRoutingModule } from './products-all-routing.module';

import { ProductsAllPage } from './products-all.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsAllPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProductsAllPage]
})
export class ProductsAllPageModule {}
