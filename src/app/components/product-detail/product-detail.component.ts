import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { FavService } from 'src/app/services/fav.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

  @Input() product;   
  cart;
  favs;
  added: BehaviorSubject<boolean>;
  constructor(private modalController: ModalController, 
    private toastController: ToastController,
    private cartService: CartService,
    private favsService: FavService ) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.favs = this.favsService.getFavs();
    this.added = this.cartService.cartAdded();
  }


  close() {
    this.modalController.dismiss();
  }

  favActive() {   
    this.product.fav = !this.product.fav 
    this.favsService.addProductFav(this.product);   
    
  }

  animate(){
    this.added.next(true);
    setTimeout(() => {
      this.added.next(false);
    }, 1000);
  }

  AddProduct(){
      this.cartService.addProduct(this.product); 
      console.log(this.cart);
      //this.Toast('Product added to cart'); 
      this.animate();
      this.close();
      
  }


  async Toast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 500,
      color: 'primary',
      position: 'middle'
    });
    toast.present();
  }

  
}
