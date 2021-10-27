import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(private toastCtrl: ToastController,
    private router: Router) { }
    
  ngOnInit() {
  }
 
  SignUp(){
    this.router.navigate(['new-user']);
  }
}
