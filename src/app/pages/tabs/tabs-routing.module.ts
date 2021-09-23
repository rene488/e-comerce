import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'new-user',
        loadChildren: () => import('../../pages/new-user/new-user.module').then( m => m.NewUserPageModule)
      },
      {
        path: 'favs',
        loadChildren: () => import('../../pages/favs/favs.module').then( m => m.FavsPageModule)
      },
      {
        path: 'user-profile',
        loadChildren: () => import('../../pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../../pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
      },
      {
        path: 'shopping-cart',
        loadChildren: () => import('../../pages/shopping-cart/shopping-cart.module').then( m => m.ShoppingCartPageModule)
      },
      {
        path: 'payment-data',
        loadChildren: () => import('../../pages/payment-data/payment-data.module').then( m => m.PaymentDataPageModule)
      },
      {
        path: 'products-all',
        loadChildren: () => import('../../pages/products-all/products-all.module').then( m => m.ProductsAllPageModule)
      },
      {
        path: 'user-purchases',
        loadChildren: () => import('../../pages/user-purchases/user-purchases.module').then( m => m.UserPurchasesPageModule)
      },
      
        
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
