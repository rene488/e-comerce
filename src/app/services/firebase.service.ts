import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Purchase } from '../models/purchase.model';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {



  constructor(private auth: AngularFireAuth,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private db: AngularFirestore,
    private router: Router) { }


  DataBase() {
    return this.db;
  }

  logout() {
    this.auth.auth.signOut().then(() => {
      this.router.navigate(['login']);
    });
  }


  async NewPurchase(purchase: Purchase) {

    purchase.idUser = JSON.parse(localStorage.getItem('uid')); 
    const loading = await this.loadingController.create();
    await loading.present();


    await this.db.doc('Purchases/' + purchase.id).set({
      id: purchase.id,
      products: purchase.products,
      img: purchase.img,
      date: purchase.date,
      total: purchase.total,
      idUser: purchase.idUser
    }).then(res => {
     
      loading.dismiss();
    }, error => {
    
      loading.dismiss();
    })



  }



  async NewUser(user: User) {

    const loading = await this.loadingController.create();
    await loading.present();

    await this.auth.auth
      .createUserWithEmailAndPassword(user.email, user.password).then(async res => {

        const uid = res.user.uid;

        await this.db.doc('users/' + uid).set({
          id: uid,
          username: user.username,
          email: user.email,
        });

        loading.dismiss();
      }, err => {
        loading.dismiss();
        this.Toast(err.message);
      });
  }




  async Login(user) {

    const loading = await this.loadingController.create();
    await loading.present();

    await this.auth.auth
      .signInWithEmailAndPassword(user.email, user.password).then(res => {
        console.log(res.user.uid);

        this.router.navigate(['/tabs/home']);
        loading.dismiss();
      }, err => {
        loading.dismiss();
        this.Toast(err.message);
      });
  }

  async Toast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      position: 'bottom',
      duration: 3000,
      color: 'secondary',
    });
    toast.present();


  }

}

