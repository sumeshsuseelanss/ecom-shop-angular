import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Itemselected } from '../modals/Itemselected';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private baseUrl = 'http://localhost:8082/api/v1/';  
  userName;
  cartItems$;
  cartFlag = true;
  constructor(private http: HttpClient,private router: Router) { }

  getCartItems(): Observable<any> {
    this.userName = localStorage.getItem("localStorageUserName");
    return this.http.get<Itemselected[]>((this.baseUrl+"items/"+this.userName));
 }
 deleteCartItem(item): Observable<any> {
  this.userName = localStorage.getItem("localStorageUserName");
  return this.http.delete<Itemselected[]>((this.baseUrl+"delete/"+item+"/"+this.userName));
}

totalAmount(){
  return this.http.get<Itemselected[]>((this.baseUrl+"items/total/"+this.userName));
}

}
