import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
  checkLogin;
  constructor(private router: Router) { }

  userLoginCheck(){
    this.checkLogin = this.router.url;
    return this.checkLogin ;
  }
}
