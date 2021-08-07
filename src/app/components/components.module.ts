import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormLoginComponent } from './form-login/form-login.component';
import { HeaderComponent } from './header/header.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LogoComponent } from './logo/logo.component';
import { HeaderdComponent } from './headerd/headerd.component';
import { HeaderModalComponent } from './header-modal/header-modal.component';


@NgModule({
  exports: [FormLoginComponent, HeaderComponent, ProductDetailComponent, LogoComponent, HeaderdComponent,HeaderModalComponent],
  declarations: [FormLoginComponent, HeaderComponent,  ProductDetailComponent, LogoComponent, HeaderdComponent,HeaderModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FormsModule
  ],
  
})
export class ComponentsModule { }
