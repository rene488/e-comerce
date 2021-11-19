import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormLoginComponent } from './form-login/form-login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HeaderdComponent } from './headerd/headerd.component';


import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { StarRatingModule } from 'ionic5-star-rating';
import { ShapeHeaderComponent } from './shape-header/shape-header.component';
import { CreditCardFormComponent } from './credit-card-form/credit-card-form.component';
import { ReceiptComponent } from './receipt/receipt.component';


@NgModule({
  exports: [ReceiptComponent, CreditCardFormComponent, ShapeHeaderComponent, ProductCardComponent, FooterComponent, FormLoginComponent, ProductDetailComponent, HeaderdComponent],
  declarations: [ReceiptComponent, CreditCardFormComponent, ShapeHeaderComponent, ProductCardComponent, FooterComponent, FormLoginComponent, ProductDetailComponent, HeaderdComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FormsModule,
    StarRatingModule
  ],
  providers: [DatePipe]
  
})
export class ComponentsModule { }
