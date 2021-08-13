import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-products-all',
  templateUrl: './products-all.page.html',
  styleUrls: ['./products-all.page.scss'],
})
export class ProductsAllPage implements OnInit {

  constructor( private modalController: ModalController,
    private router: Router) { }

  ngOnInit() {
  }

  buscar(event){
    console.log(event);
  }

  close() {
    this.router.navigate(['/tabs/home']);
  }

}
