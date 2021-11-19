import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PipesModule } from './pipes/pipes.module';

//Firebase
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule} from "@angular/fire/auth";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment.prod";
@NgModule({
  declarations: [AppComponent,],
  entryComponents: [],
  imports: [AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule, BrowserModule, IonicModule.forRoot(), IonicModule.forRoot({ mode: 'md' }), AppRoutingModule, PipesModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
