import { Component, OnInit } from '@angular/core';
import { PurchasesService } from 'src/app/services/purchases.service';

@Component({
  selector: 'app-user-purchases',
  templateUrl: './user-purchases.page.html',
  styleUrls: ['./user-purchases.page.scss'],
})
export class UserPurchasesPage implements OnInit {

  purchases = [];

  constructor(
    private purchasesServices: PurchasesService
  ) { }

  ngOnInit() {
    this.purchases = this.purchasesServices.getPurchases();
  }

}
