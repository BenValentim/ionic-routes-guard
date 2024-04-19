import { Component } from '@angular/core';
import { AuthGuard } from 'src/app/guard/auth-guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private authGuard: AuthGuard
  ) { }

  login() {
    this.authGuard.login();
  }
}
