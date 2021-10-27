import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerd',
  templateUrl: './headerd.component.html',
  styleUrls: ['./headerd.component.scss'],
})
export class HeaderdComponent implements OnInit {

  @Input() back;
  @Input() title;
  constructor() { }

  ngOnInit() {}

}
