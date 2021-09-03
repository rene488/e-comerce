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
    { 
      img: 'https://images.pizzahut.services/vol/phco/images/cms/minipromocion/takeaway_home.jpg'
    },
    { 
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7PEgLK4Mrd5Kg4Pc-NyqEllvMfMX8eI0e6g&usqp=CAU'
    },
    { 
      img: 'https://lh3.googleusercontent.com/proxy/sd-YsP7TMu2MfRBKKR_VRl0AYi7aD4MWh6u6_YmtyzEyc1y3UpZUZHxXZcgfpyXbSspqDiQ3BQbsZa-sELEfyOJBpIQPdIbqP3hyP7dEYeXvFipVjtprJWzjdJc'
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
