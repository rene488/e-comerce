import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {

   form;

  constructor(private formBuilder: FormBuilder, private router: Router) {
   
  }

  ngOnInit() {

    this.form = this.formBuilder.group({
      email: [''.toLowerCase(), [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

}
