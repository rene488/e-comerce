import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { PurchasesService } from 'src/app/services/purchases.service';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.scss'],
})
export class PaymentDetailComponent implements OnInit {
 
  card = { cardnumber: '', name: '', cvv: '', expiryDate: '' };
  purchase;
  total;
  cart;
  constructor(private modalController: ModalController,
    private datePipe: DatePipe,
    private router: Router,
    private toastCtrl: ToastController,
    private cartService: CartService,
    private purchaseService: PurchasesService ) { }

  ngOnInit() { 
    this.cart = this.cartService.getCart();
  }

  close() {
    this.modalController.dismiss();
  };

  pay() {
    if (this.validations()) {
      this.modalController.dismiss();
      this.router.navigate(['/tabs/user-purchases']);
      this.cartService.removeAll();
      this.purchase = {id: Date.now(), date: Date.now(), products: this.cart, total: this.cartService.getTotal()}
      this.purchaseService.addPurchases(this.purchase)
    }
  } 

  formatCardNumber() {
    let cn = this.card.cardnumber.replace(/\d{4}(?=.)/g, '$& ');
    return cn;
  }


  formatExpiryDate() {
    let ed = this.datePipe.transform(this.card.expiryDate, "MM/YY");
    return ed;
  }

  validations() {

    if (!this.card.cardnumber) {
      this.toast('The card number cannot be empty.');
      return false;
    }

    if (!this.card.name) {
      this.toast('The name cannot be empty.');
      return false;
    }

    if (!this.card.expiryDate) {
      this.toast('The expiry date cannot be empty.');
      return false;
    }

    if (!this.card.cvv) {
      this.toast('The card date cannot be empty.');
      return false;
    }
    return true;
  }
  async toast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 1000,
      color: 'primary'
    });
    toast.present();
  }

}
