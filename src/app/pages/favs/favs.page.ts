import { Component, OnInit } from '@angular/core';
import { FavService } from 'src/app/services/fav.service';
import { Products } from 'src/app/services/products-test';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.page.html',
  styleUrls: ['./favs.page.scss'],
})
export class FavsPage implements OnInit {

  favs;
  products = Products;


  constructor(private favService: FavService) { }

  ngOnInit() {
    this.favs=this.favService.getFavs();
  }

  ionViewWillEnter(){
    this.favService.clean();
  }
  
  remove(product){
    this.favService.removeProduct(product);
  }
}
