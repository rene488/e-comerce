import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {


  notifications = [];
  constructor(private notificationsService: NotificationsService,
    private firebaseService: FirebaseService) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.notifications = this.notificationsService.getNotifications();
    this.notificationsService.clean();
  }

}
