import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-modal',
  templateUrl: './header-modal.component.html',
  styleUrls: ['./header-modal.component.scss'],
})
export class HeaderModalComponent implements OnInit {

  @Input() title;

  constructor() { }

  ngOnInit() {}

}
