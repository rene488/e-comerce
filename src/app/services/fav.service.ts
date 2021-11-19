import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavService {

  private favs = [];
  private counter = new BehaviorSubject(0);
 
  constructor(private toastController: ToastController) { }

  getCounter(){
    return this.counter;
  }

  clean(){
    this.counter.next(this.counter.value * 0);
  }

  getFavs() {
    return this.favs
  }

  addProductFav(product) {
    let added = false;    
    for (let p of this.favs) {
      if (p.id === product.id) {
        this.removeProduct(product);
        this.counter.next(this.counter.value - 1);
        added = true;
        break;
      }
    }
    if (!added) {  
      this.favs.push(product);
      this.counter.next(this.counter.value + 1);
      this.Toast('Added to your favorite products');
    }
  }

  
removeProduct(product) {
  for (let [index, p] of this.favs.entries()) {
    if (p.id === product.id) {     
      this.favs.splice(index, 1);
    }
  }

}

async Toast(message) {
  const toast = await this.toastController.create({
    message: message,
    duration: 1000,
    color:'primary'
  });
  toast.present();
}

}
