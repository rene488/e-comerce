import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductDetailComponent } from 'src/app/components/product-detail/product-detail.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  segment = 'Food';


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

  category = [
    {
      categoryId: '1',
      categoryName: 'Food'
    },
    { 
      categoryId: '2',
      categoryName: 'Desserts'
    },
    { 
      categoryId: '3',
      categoryName: 'Additionals'
    },
  ]


  product = [
    { 
      id: '1',
      name: 'Fried chicken',
      img: 'https://i.pinimg.com/originals/20/87/bc/2087bc5431a009b4f55120d34ac06743.jpg',
      price: 5,
      categoryName: 'Food',
      categoryId: '1',
      quantity: 1,
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit laudantium ipsa ab itaque, ratione modi fuga. Ipsam nostrum consequatur, sed quos ullam quibusdam dolorem ad atque accusamus repellendus error nisi!'
      
    },
    {
      id: '2',
      name:  'Pepito de carne',
      img:  'https://www.tupanapanadero.com/wp-content/uploads/2021/01/pepito-carne-WhatsApp-Image-2021-02-02-at-9.42.25-PM.jpeg',
      price: 6,
      categoryName: 'Food',
      categoryId: '1',
      quantity: 1,
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit laudantium ipsa ab itaque, ratione modi fuga. Ipsam nostrum consequatur, sed quos ullam quibusdam dolorem ad atque accusamus repellendus error nisi!'
    },
    {
      id: '3',
      name: 'Family grill',
      img:  'https://x3jme3vmctf3dmlkql5tzx17-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/mejora-tus-conocimientos-en-parrilladas-y-asados-940x580.jpg',
      price: 10,
      categoryName: 'Food',
      categoryId: '1',
      quantity: 1,
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit laudantium ipsa ab itaque, ratione modi fuga. Ipsam nostrum consequatur, sed quos ullam quibusdam dolorem ad atque accusamus repellendus error nisi!'
    },
    {
      id: '4',
      name: 'Oreo meringue',
      img:  'https://t1.uc.ltmcdn.com/images/2/8/2/img_como_hacer_merengada_de_oreo_34282_600.jpg',
      price: 3,
      categoryName: 'Additionals',
      categoryId: '3',
      quantity: 1,
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit laudantium ipsa ab itaque, ratione modi fuga. Ipsam nostrum consequatur, sed quos ullam quibusdam dolorem ad atque accusamus repellendus error nisi!'
    },
    {
      id: '5',
      name: 'Hot dog',
      img:  'https://misrecetascolombia.com/wp-content/uploads/2020/12/Perros-Calientes-Colombianos.jpg',
      price: 3,
      categoryName: 'Food',
      categoryId: '1',
      quantity: 1,
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit laudantium ipsa ab itaque, ratione modi fuga. Ipsam nostrum consequatur, sed quos ullam quibusdam dolorem ad atque accusamus repellendus error nisi!'
    },
    {
      id: '6',
      name: 'chocolate cake',
      img:  'https://biensabroso.com/wp-content/uploads/torta-chocolate.jpg.525.0.jpg',
      price: 4,
      categoryName: 'Desserts',
      categoryId: '2',
      quantity: 1,
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit laudantium ipsa ab itaque, ratione modi fuga. Ipsam nostrum consequatur, sed quos ullam quibusdam dolorem ad atque accusamus repellendus error nisi!'
    },
  ]


  forCategory;

 
  constructor(private  modalController: ModalController) { }



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
    this.forCategory = this.product.filter(res=> res.categoryName == this.segment);
  }  


  slide = {
    slidesPerView: 1.5,
  }
}
