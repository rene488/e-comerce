import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class FavService {

  private favs = [];

  constructor() { }

  getFavs() {
    return this.favs
  }

  addProductFav(product) {
    let added = false;    
    for (let p of this.favs) {
      if (p.id === product.id) {
        this.removeProduct(product);
        added = true;
        break;
      }
    }
    if (!added) {  
      this.favs.push(product);
    }
  }

  
removeProduct(product) {
  for (let [index, p] of this.favs.entries()) {
    if (p.id === product.id) {     
      this.favs.splice(index, 1);
    }
  }

}
}
