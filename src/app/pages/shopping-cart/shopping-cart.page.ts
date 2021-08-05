import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {
  
  cart;
  
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
  
  descreaseProduct(){
    this.cartService.descreaseProduct;
  }

  increaseProduct() {
    this.cartService.increaseProduct;
  }
}
