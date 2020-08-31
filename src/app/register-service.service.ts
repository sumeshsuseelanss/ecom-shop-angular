import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from 'src/app/modals/Register';
import { Login } from 'src/app/modals/Login';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class RegisterServiceService {

  private baseUrl = 'http://localhost:8082/api/v1/';  

  constructor(private http: HttpClient) {}
   
//   public create(register:Register): Observable<Register>{
//  return this.http.post<Register>(this.baseUrl+"registerUser", register);
//  // return this.http.post<Register>(this.baseUrl+"registerUser", register);
    
//   }

public createUser(register) {
  return this.http.post<Register>(this.baseUrl+"registerUser", register);
}

public loginUser(loginUser){
  console.log("logiUser ---> ",loginUser);
  return this.http.post<Login>(this.baseUrl+"postUser",loginUser);
}

}
