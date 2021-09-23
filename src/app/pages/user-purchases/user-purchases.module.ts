import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPurchasesPageRoutingModule } from './user-purchases-routing.module';

import { UserPurchasesPage } from './user-purchases.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPurchasesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [UserPurchasesPage]
})
export class UserPurchasesPageModule {}
