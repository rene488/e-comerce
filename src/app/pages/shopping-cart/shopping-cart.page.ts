import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {
  
  cart;
  total;
  
  
  constructor(private cartService: CartService,
    private router: Router,
    private toasCtrl: ToastController) {}

  ngOnInit() {
   this.cart = this.cartService.getCart();

  }

  increaseProduct(product) {
    this.cartService.increaseProduct(product);
  }

  descreaseProduct(product){
    this.cartService.descreaseProduct(product);
  }

  removeProduct(product){
    this.cartService.removeProduct(product);
  }

  getTotal(){
    return this.total = this.cartService.getTotal();
  }

  goPay(){
    if(this.cart.length == 0){
      this.toast('The cart is empy.')
    }
    this.router.navigate(['/tabs/payment-data']);
  }

  async toast(message) {
    const toast = await this.toasCtrl.create({
      message: message,
      duration: 1000,
      color: 'primary'
    });
    toast.present();
  }
}
