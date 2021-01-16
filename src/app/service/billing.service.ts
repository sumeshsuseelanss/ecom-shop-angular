import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Address } from '../modals/Address';


@Injectable({
  providedIn: 'root'
})
export class BillingService {
  private baseUrl = 'http://localhost:8082/api/v1/';  

  constructor(private http: HttpClient) { }


  public postAddress(addressJSONData){


    return this.http.post<Address>(this.baseUrl+"address",addressJSONData);
  }
  
}
