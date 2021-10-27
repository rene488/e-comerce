import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private notifications = [
    {
      id: Date.now(),
      img: '../../../assets/img/hi.jpg',
      title: 'Welcome to the Food Ecommerce!',
      content: 'Now you can order the best food in the easiest way',
      date: Date.now()
    }];
  private counter = new BehaviorSubject(1);

  constructor() { }
  getNotifications() {
    return this.notifications;
  }

  getCounter() {
    return this.counter;
  }

  clean() {
    this.counter.next(this.counter.value * 0);
  }


}
