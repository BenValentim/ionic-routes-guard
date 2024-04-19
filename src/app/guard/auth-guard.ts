import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {
    authState = new BehaviorSubject(false);

    constructor(
        public navCtrl: NavController
    ) {
        this.ifLoggedIn();
    }

    async ifLoggedIn() {
        if (this.isAuthenticated()) {
            this.login();
        } else {
            this.logout();
        }
    }

    async login() {
        this.authState.next(true);
        this.navCtrl.navigateRoot(['/tabs/tab1']);
    }

    async logout() {
        this.authState.next(false);
        this.navCtrl.navigateRoot(['/login']);
    }

    isAuthenticated() {
        return this.authState.value;
    }

}
