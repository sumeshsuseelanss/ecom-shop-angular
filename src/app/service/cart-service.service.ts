import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Itemselected } from '../modals/Itemselected';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private baseUrl = 'http://localhost:8082/api/v1/items/';  
  userName;
  cartItems$;
  constructor(private http: HttpClient,private router: Router) { }

  getCartItems(): Observable<any> {
    this.userName = localStorage.getItem("localStorageUserName");
    return this.http.get<Itemselected[]>((this.baseUrl+this.userName));
 }
}
