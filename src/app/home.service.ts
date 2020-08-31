import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/modals/Category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8082/api/v1/';  
 

  getCategories(): Observable<any> {
     return this.http.get<Category[]>((this.baseUrl+"categories"));
  }

  getAllProducts():Observable<any>{
    return this.http.get<Category[]>((this.baseUrl+"products"));
  }
  

}
