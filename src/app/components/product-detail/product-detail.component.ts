import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

  @Input() product;
   
  

  fav = false;

  constructor(private modalController: ModalController, private cartService: CartService ) { }

  ngOnInit() {
    
  }


  close() {
    this.modalController.dismiss();
  }

  favActive() {
    this.fav = !this.fav
  }

  AddProduct(){
    this.cartService.addProduct(this.product);
    
  }

}
