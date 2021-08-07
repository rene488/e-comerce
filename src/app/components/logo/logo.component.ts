import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {

  animate; 

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.animate = !this.animate
    }, 1500);
  }

}
