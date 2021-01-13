import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Products } from '../modals/Products';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  private baseUrl = 'http://localhost:8082/api/v1/';  


  constructor(private http: HttpClient,private router: Router) { }


  addProduct(productObj):Observable<any>{
    return this.http.post<Products[]>((this.baseUrl+"postProduct"),productObj);
  }
}
