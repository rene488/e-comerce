import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {


  notifications = [
    {
      name: 'New combo',
      img: 'https://senaoportunidades.site/wp-content/uploads/2019/01/comida-rapida.jpg',
      content: 'Here we bring you the combo of the day'
    },
    {
      name: 'New offer',
      img: 'https://www.torontohispano.com/wp-content/uploads/2018/07/pollo-frito.png',
      content: 'We bring you the offer of the day 4 pieces of chicken and a large soda'
    },
    {
      name: 'New combo',
      img: 'https://cdn.kiwilimon.com/recetaimagen/29899/32209.jpg',
      content: 'Here we bring you the combo of the day'
    },
    {
      name: 'New combo',
      img: 'https://senaoportunidades.site/wp-content/uploads/2019/01/comida-rapida.jpg',
      content: 'Here we bring you the combo of the day'
    },
    {
      name: 'New offer',
      img: 'https://www.torontohispano.com/wp-content/uploads/2018/07/pollo-frito.png',
      content: 'We bring you the offer of the day 4 pieces of chicken and a large soda'
    },
    {
      name: 'New combo',
      img: 'https://cdn.kiwilimon.com/recetaimagen/29899/32209.jpg',
      content: 'Here we bring you the combo of the day'
    },
  ]



  constructor() { }

  ngOnInit() {
  }

}
