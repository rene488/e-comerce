import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormLoginComponent } from './form-login/form-login.component';
import { HeaderComponent } from './header/header.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  exports: [FormLoginComponent, HeaderComponent, ProductDetailComponent],
  declarations: [FormLoginComponent, HeaderComponent,  ProductDetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule
  ],
  
})
export class ComponentsModule { }
