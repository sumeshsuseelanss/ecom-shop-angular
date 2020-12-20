import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginAuthService } from './login-auth.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {

  constructor(private router: Router,private loginAuthService: LoginAuthService){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(this.loginAuthService.userLoginCheck() == '/'){
      this.router.navigate(['/']);
      return false;
    }else{
    return true;
    }
  }
  
}
