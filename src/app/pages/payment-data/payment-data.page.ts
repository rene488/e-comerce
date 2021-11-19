import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CreditCardFormComponent } from 'src/app/components/credit-card-form/credit-card-form.component';

@Component({
  selector: 'app-payment-data',
  templateUrl: './payment-data.page.html',
  styleUrls: ['./payment-data.page.scss'],
})
export class PaymentDataPage implements OnInit {

  
  constructor(private router: Router,
              private modalController: ModalController) { }

  ngOnInit() {
  }


 async creditCardMethod(){
    let modal = await this.modalController. create ({
      component: CreditCardFormComponent    
    });
    modal.present();
  }

  close() {
    this.router.navigate(['/tabs/shopping-cart']);
  }

  
}
