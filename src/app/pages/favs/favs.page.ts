import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.page.html',
  styleUrls: ['./favs.page.scss'],
})
export class FavsPage implements OnInit {


  products = [
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


  constructor() { }

  ngOnInit() {
  }

}
