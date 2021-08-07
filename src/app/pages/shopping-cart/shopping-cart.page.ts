import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {
  
  cart;
  total;
  
  
  constructor(private cartService: CartService) {}

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
}
