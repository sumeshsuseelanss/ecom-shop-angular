import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Login } from 'src/app/modals/Login';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  responseStatus;
  userNameLogin
  respBody;
  responseRole;
  private baseUrl = 'http://localhost:8082/api/v1/user/';  

  constructor(private http: HttpClient,private router: Router) {}
  

  public getUsers(paramValaue) {
    this.baseUrl = this.baseUrl+paramValaue;
    this.userNameLogin = paramValaue;
    console.log("login api --> ",this.baseUrl);
    this.respBody =this.http.get<Login[]>((this.baseUrl), {observe: 'response'}).subscribe((response) =>{
         console.log("testing getUsers --- >");
     this.responseStatus=response.status
     this.responseRole=response.body;
     localStorage.setItem('userRole', this.responseRole.role);
     console.log("responseStatus --> ",this.responseStatus);
    if(this.responseStatus == 200){
      console.log("paramValue ---> ",paramValaue);
     localStorage.setItem("localStorageUserName",paramValaue);
     console.log(localStorage.getItem("localStorageUserName"));
     console.log("should navigate to home!!")
      this.router.navigate(['home']);
    }
     }
    );

    console.log("user role ---> ",localStorage.getItem('userRole'));
  }


}
