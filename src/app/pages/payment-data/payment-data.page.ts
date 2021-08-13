import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PaymentDetailComponent } from 'src/app/components/payment-detail/payment-detail.component';

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

  async paymentDetail(paymentTypes) {
    let modal = await this.modalController. create ({
      component: PaymentDetailComponent,
      componentProps: ({
        paymentTypes: paymentTypes
      })
    });
    modal.present();
  }

  close() {
    this.router.navigate(['/tabs/shopping-cart']);
  }

  
}
