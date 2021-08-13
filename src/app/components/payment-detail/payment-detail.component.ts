import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.scss'],
})
export class PaymentDetailComponent implements OnInit {

  card = { cardnumber: '', cardholdername: '', validthruv: '' };
  

  constructor(private modalController: ModalController, 
    private router: Router,
    private toastCtrl: ToastController ) { }

  ngOnInit() {}

  close() {
    this.modalController.dismiss();
  };
  
  pay() {
    if (this.validations()) {
      this.router.navigate(['/tabs/shopping-cart']);
    }
  }
  
  
  validations() {
    
    if (!this.card.cardnumber) {
      this.toast('The card number cannot be empty.');
      return false;
    }
    if (!this.card.cardholdername) {
      this.toast('The name cannot be empty.');
      return false;
    }
    if (!this.card.validthruv) {
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
