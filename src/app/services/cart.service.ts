import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
  private added = new BehaviorSubject(false);
  constructor() { }

  getCart() {
    return this.cart;
  }

cartAdded(){
  return this.added;
}

  getCartItemCount() {
    return this.cartItemCount;
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.quantity, 0);
  }

  addProduct(product) {
    let added = false;    
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.quantity += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.quantity = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);

  }

  increaseProduct(product) {
    for (let p of this.cart){
      if (p.id === product.id) {
        p.quantity +=1;
        break;
      }
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  descreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.quantity -=1;
        if (p.quantity == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);

  }

  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {     
        this.cart.splice(index, 1);
      }
      this.cartItemCount.next(this.cartItemCount.value - p.quantity);
    }
    
  }
}
