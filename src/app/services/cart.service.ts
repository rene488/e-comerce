import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.quantity, 0);
  }

  addProduct(product) {

    for (let p of this.cart) {
      if (p.id === product.id) {
        p.quantity +=1;
        break;
      }
      else {
        this.cart.push(product);
      }
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  increaseProduct(product) {
    for (let p of this.cart){
      if (p.id === product.id) {
        p.amount +=1;
        break;
      }
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  descreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -=1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);

  }
}
