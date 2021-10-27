import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormLoginComponent } from './form-login/form-login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HeaderdComponent } from './headerd/headerd.component';
import { HeaderModalComponent } from './header-modal/header-modal.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { StarRatingModule } from 'ionic5-star-rating';


@NgModule({
  exports: [ProductCardComponent, FooterComponent, FormLoginComponent, ProductDetailComponent, HeaderdComponent,HeaderModalComponent,PaymentDetailComponent],
  declarations: [ProductCardComponent, FooterComponent, FormLoginComponent, ProductDetailComponent, HeaderdComponent,HeaderModalComponent,PaymentDetailComponent],
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
