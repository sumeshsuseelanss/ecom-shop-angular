import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Itemselected } from '../modals/Itemselected';
import { OrderTrack } from '../modals/OrderTrack';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  private baseUrl = 'http://localhost:8082/api/v1/'; 
  userName; 


  constructor(private http: HttpClient,private router: Router) { }

  clearCartItems(): Observable<any> {
    this.userName = localStorage.getItem("localStorageUserName");
    console.log("Testing ----> ",this.baseUrl+"delete/"+this.userName);
    return this.http.delete<Itemselected[]>(this.baseUrl+"delete/"+this.userName);
  }

  placeOrder(orderTrackJsonPayLoad){
    return this.http.post<OrderTrack>(this.baseUrl+"order/trackOrder",orderTrackJsonPayLoad);
  }

  fetchOrderHistByUser(){
    this.userName = localStorage.getItem("localStorageUserName");
    return this.http.get<OrderTrack[]>((this.baseUrl+"order/"+this.userName));
  }

}
