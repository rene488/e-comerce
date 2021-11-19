import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {

   form;

  constructor(private formBuilder: FormBuilder, private router: Router, private firebaseService: FirebaseService, private toastController: ToastController) {
   
  }

  ngOnInit() {

    this.form = this.formBuilder.group({
      email: [''.toLowerCase(), [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  Submit() {
    if(this.form.valid){
      this.firebaseService.Login(this.form.value);   
      this.form.reset();
    }else{
      this.Toast('Fill in all the fields')
    }
    
  }

  goTo(){
    this.router.navigate(['/tabs/home'])
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  async Toast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      position: 'bottom',
      duration: 1000,
      color: 'secondary',
    });
    toast.present();


  }


}
