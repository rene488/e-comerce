import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss'],
})
export class ReceiptComponent implements OnInit {

  @Input() p;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
   
  }


  close() {
    this.modalController.dismiss();
  }

}
