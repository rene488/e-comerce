import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {

  private purchase;
  purchases = [];

  constructor() { }

  getPurchases(){
    return this.purchases
  };

  addPurchases(purchase){
    this.purchases.push(purchase)
  }
}
