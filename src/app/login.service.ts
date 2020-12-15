import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Login } from 'src/app/modals/Login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  responseStatus;
  userNameLogin
  respBody;
  private baseUrl = 'http://localhost:8082/api/v1/user/';  

  constructor(private http: HttpClient,private router: Router) {}
  

  public getUsers(paramValaue) {
    this.baseUrl = this.baseUrl+paramValaue;
    this.userNameLogin = paramValaue;
    this.respBody =this.http.get<Login[]>((this.baseUrl), {observe: 'response'}).subscribe((response) =>{

     this.responseStatus=response.status
     console.log("responseStatus --> ",this.responseStatus);
    if(this.responseStatus == 200){
      console.log("paramValue ---> ",paramValaue);
     localStorage.setItem("localStorageUserName",paramValaue);
     console.log(localStorage.getItem("localStorageUserName"));
      this.router.navigate(['home']);
    }
     }
    );
  }


}
