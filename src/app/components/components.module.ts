import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormLoginComponent } from './form-login/form-login.component';


@NgModule({
  exports: [FormLoginComponent],
  declarations: [FormLoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule
  ],
  
})
export class ComponentsModule { }
