import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {


  notifications = [];
  constructor(private notificationsService: NotificationsService) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.notifications = this.notificationsService.getNotifications();
    this.notificationsService.clean();
  }

}
