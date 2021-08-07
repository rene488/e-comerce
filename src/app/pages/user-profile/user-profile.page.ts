import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

   expenses = 100;
   credits = 5;
   orders = 15;
   tips = 100

  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  async options() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: [{
        text: 'Share',
        icon: 'share-social-outline',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Contact',
        icon: 'logo-whatsapp',
        handler: () => {
          console.log('Share clicked');
        }
      },{
        text: 'Log out',
        icon: 'log-out-outline',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
  
    await actionSheet.present();
  }
}
