import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Products } from 'src/app/services/products-test';

@Component({
  selector: 'app-products-all',
  templateUrl: './products-all.page.html',
  styleUrls: ['./products-all.page.scss'],
})
export class ProductsAllPage implements OnInit {

  products = Products;
  textSearch = '';

  constructor( private modalController: ModalController,
    private router: Router) { }

  ngOnInit() {
  }

  buscar(event){
    this.textSearch = event.target.value;
  }

  close() {
    this.router.navigate(['/tabs/home']);
  }

}
