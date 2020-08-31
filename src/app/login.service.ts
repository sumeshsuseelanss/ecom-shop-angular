import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Login } from 'src/app/modals/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  responseStatus;
  userNameLogin
  respBody;
  private baseUrl = 'http://localhost:8082/api/v1/user/';  

  constructor(private http: HttpClient) {}
  

  public getUsers(paramValaue) {
    this.baseUrl = this.baseUrl+paramValaue;
    this.userNameLogin = paramValaue;
    this.respBody =this.http.get<Login[]>((this.baseUrl), {observe: 'response'}).subscribe((response) =>{
      console.log(response.body)
    this.responseStatus=response.body
    console.log("response ===> ",this.responseStatus)
     }
    );
    
  }


}
