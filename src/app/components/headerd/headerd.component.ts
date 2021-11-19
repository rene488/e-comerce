import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-headerd',
  templateUrl: './headerd.component.html',
  styleUrls: ['./headerd.component.scss'],
})
export class HeaderdComponent implements OnInit {

  @Input() title;
  @Input() backButton;
  @Input() backButtonModal;
  constructor(private modalController: ModalController,
    private router: Router) { }

  ngOnInit() {}

  close(){
    this.modalController.dismiss();
  }

  GoToPurchases(){
    this.router.navigateByUrl('/tabs/user-profile/user-purchases');
  }
}
