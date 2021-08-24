import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.scss'],
})
export class PaymentDetailComponent implements OnInit {

  card = { cardnumber: '', name: '', cvv: '', expiryDate: '' };


  constructor(private modalController: ModalController,
    private datePipe: DatePipe,
    private router: Router,
    private toastCtrl: ToastController,
    private cartServive: CartService) { }

  ngOnInit() { }

  close() {
    this.modalController.dismiss();
  };

  pay() {
    if (this.validations()) {
      this.modalController.dismiss();
      this.router.navigate(['/tabs/shopping-cart']);
      this.cartServive.removeAll();
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
