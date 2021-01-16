import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Itemselected } from '../modals/Itemselected';

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
}
