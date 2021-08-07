import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  cartItemCount: BehaviorSubject<number>;
  added: BehaviorSubject<boolean>;
  selectedPath = '';
  isCart = false;
  
  constructor(private router: Router,
    private cartService: CartService) {

    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
    this.cartItemCount = this.cartService.getCartItemCount();
    this.added = this.cartService.cartAdded();
  }

  

  notSelected(){
    this.isCart = false;
  }

  goToShoppingCart() {
    this.router.navigate(['/tabs/shopping-cart']);
    this.isCart = true;  
  }

}
