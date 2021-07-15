import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  segment = 'Food';


  products = [
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

  categories = [
    {
      id:1,
      name: 'Food'
    },
    { 
      id:2,
      name: 'Desserts'
    },
    { 
      id:3,
      name: 'Additionals'
    },
  ]


  home = [
    { 
      id: '1',
      name: 'Fried chicken',
      img: 'https://i.pinimg.com/originals/20/87/bc/2087bc5431a009b4f55120d34ac06743.jpg',
      price: 5,
      categories: 'Food' 
      
    },
    {
      id: '2',
      name:  'Pepito de carne',
      img:  'https://www.tupanapanadero.com/wp-content/uploads/2021/01/pepito-carne-WhatsApp-Image-2021-02-02-at-9.42.25-PM.jpeg',
      price: 6,
      categories: 'Food'
    },
    {
      id: '3',
      name: 'Family grill',
      img:  'https://x3jme3vmctf3dmlkql5tzx17-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/mejora-tus-conocimientos-en-parrilladas-y-asados-940x580.jpg',
      price: 10,
      categories: 'Food'
    },
    {
      id: '4',
      name: 'Oreo meringue',
      img:  'https://t1.uc.ltmcdn.com/images/2/8/2/img_como_hacer_merengada_de_oreo_34282_600.jpg',
      price: 3,
      categories: 'Additionals'
    },
    {
      id: '5',
      name: 'Hot dog',
      img:  'https://misrecetascolombia.com/wp-content/uploads/2020/12/Perros-Calientes-Colombianos.jpg',
      price: 3,
      categories: 'Food'
    },
    {
      id: '6',
      name: 'chocolate cake',
      img:  'https://biensabroso.com/wp-content/uploads/torta-chocolate.jpg.525.0.jpg',
      price: 4,
      categories: 'Desserts'
    },
  ]


  forCategories;

 
  constructor(private router: Router) { }



  ngOnInit() {
   this.filtro();
  }

  filtro(){
    this.forCategories = this.home.filter(res=> res.categories == this.segment);
  }  


  slide = {
    slidesPerView: 1.5,
  }
}
