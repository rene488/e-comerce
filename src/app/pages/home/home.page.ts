import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { ProductDetailComponent } from 'src/app/components/product-detail/product-detail.component';
import { CartService } from 'src/app/services/cart.service';
import { Categories, Products } from 'src/app/services/products-test';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  

  segment = '1';

  


  home = [
    { name: 'Burger',
      img: 'https://thumbs.dreamstime.com/b/hamburguesa-grande-en-el-fondo-blanco-47519244.jpg'
    },
    { name:'Pizza special',
      img:'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2013/04/pizza-margarita.jpg'
    },
    { name:'chips',
      img: 'https://img.postershop.me/5844/Products/1968392_1615482926.6924_original.jpg'
    },
   
  ]

  categories = Categories;


  products = Products;


  forCategory;

 
  constructor(private  modalController: ModalController,
              private router: Router) { }



  ngOnInit() {
   this.filtro();
  }

  async productDetail(product) {
    let modal = await this.modalController. create ({
      component: ProductDetailComponent,
      componentProps: ({
        product: product
      })
    });
    modal.present();
  }

  filtro(){
    this.forCategory = this.products.filter(res=> res.rating == 5);
  }  


  slide = {
    slidesPerView: 1.5,
  }

  goToProductsAll() {
    this.router.navigate(['/tabs//products-all']);  
  }
}
