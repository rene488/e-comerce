import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Purchase } from 'src/app/models/purchase.model';
import { CartService } from 'src/app/services/cart.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { PurchasesService } from 'src/app/services/purchases.service';

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.scss'],
})
export class CreditCardFormComponent implements OnInit {


  card = { cardnumber: '', name: '', cvv: '', expiryDate: '' };
  purchase = {} as Purchase;
  total;
  cart;
  constructor(private modalController: ModalController,
    private datePipe: DatePipe,
    private router: Router,
    private toastCtrl: ToastController,
    private cartService: CartService,
    private loadingController: LoadingController,
    private purchaseService: PurchasesService,
    private firebaseService: FirebaseService ) { }

  ngOnInit() { 
    this.purchase.products = this.cartService.getCart(); 
    this.purchase.total =  this.cartService.getTotal();
    this.purchase.id = Date.now().toString();
    this.purchase.date = Date.now();
    this.purchase.img = this.purchase.products[0].img;
  }

  close() {
    this.modalController.dismiss();
  };

  async pay() {
    if (this.validations()) {      
      
   
      this.firebaseService.NewPurchase(this.purchase)
    
      this.router.navigate(['/tabs/user-profile/user-purchases']);
      this.modalController.dismiss();
      setTimeout(() => {
        //loading.dismiss();
        this.cartService.removeAll();
      }, 5000);
      
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
