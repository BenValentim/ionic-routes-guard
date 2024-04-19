import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthGuard } from './auth-guard';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(public guard: AuthGuard) { }

  canActivate(): boolean {
    return this.guard.isAuthenticated();
  }
}
