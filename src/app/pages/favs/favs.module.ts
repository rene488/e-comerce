import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavsPageRoutingModule } from './favs-routing.module';

import { FavsPage } from './favs.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { StarRatingModule } from 'ionic5-star-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavsPageRoutingModule,
    ComponentsModule,
    StarRatingModule
  ],
  declarations: [FavsPage]
})
export class FavsPageModule {}
