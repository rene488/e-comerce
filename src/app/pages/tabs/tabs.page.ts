import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { FavService } from 'src/app/services/fav.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  cartItemCount: BehaviorSubject<number>;
  added: BehaviorSubject<boolean>;
  favCounter: BehaviorSubject<number>;
  notificationCounter: BehaviorSubject<number>;

  selectedPath = '';
  isCart = false;

  constructor(private router: Router,
    private favService: FavService,
    private notificationsService: NotificationsService,
    private cartService: CartService) {

    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
    this.cartItemCount = this.cartService.getCartItemCount();
    this.favCounter = this.favService.getCounter();
    this.notificationCounter = this.notificationsService.getCounter();
    this.added = this.cartService.cartAdded();
  }



  notSelected() {
    this.isCart = false;
  }

  goToShoppingCart() {
    this.router.navigate(['/tabs/shopping-cart']);
    this.isCart = true;
  }

}
