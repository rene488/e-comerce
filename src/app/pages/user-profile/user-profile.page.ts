import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
