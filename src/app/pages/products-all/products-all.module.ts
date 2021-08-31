import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsAllPageRoutingModule } from './products-all-routing.module';

import { ProductsAllPage } from './products-all.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { StarRatingModule } from 'ionic5-star-rating';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsAllPageRoutingModule,
    ComponentsModule,
    StarRatingModule,
    PipesModule
  ],
  declarations: [ProductsAllPage]
})
export class ProductsAllPageModule {}
