import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ReceiptComponent } from 'src/app/components/receipt/receipt.component';
import { FirebaseService } from 'src/app/services/firebase.service';
import { PurchasesService } from 'src/app/services/purchases.service';

@Component({
  selector: 'app-user-purchases',
  templateUrl: './user-purchases.page.html',
  styleUrls: ['./user-purchases.page.scss'],
})
export class UserPurchasesPage implements OnInit {

  purchases = [];
  waiting: boolean;
  uid: string;
  constructor(
    private purchasesService: PurchasesService,
    private modalController: ModalController,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.uid = JSON.parse(localStorage.getItem('uid')); 
    console.log(this.uid)
    this.getPurchases();
  }


  async Purchase(purchase) {
    const modal = await this.modalController.create({
      component: ReceiptComponent,
      componentProps: { p: purchase }
    });

    await modal.present();

  }

  getPurchases() {

    this.waiting = true;
    
    this.firebaseService.DataBase().collection('Purchases', ref => ref.where('idUser', '==', this.uid))
      .snapshotChanges()
      .subscribe(data => {

        this.waiting = false;
        const list = data.map(e => {
          return {
            id: e.payload.doc.id,
            date: e.payload.doc.data()['date'],
            products: e.payload.doc.data()['products'],
            img: e.payload.doc.data()['img'],
            total: e.payload.doc.data()['total'],
          };
        });
        this.purchases = list.reverse();
      });
  }

}
