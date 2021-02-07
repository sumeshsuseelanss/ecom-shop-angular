import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/modals/Category';
import { Itemselected } from 'src/app/modals/Itemselected';
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
  
  getCartCount(sessionUser):Observable<any>{
    console.log(this.baseUrl+"itemsCount/"+sessionUser);
    let num = this.http.get<Category[]>((this.baseUrl+"itemsCount/"+sessionUser));
    console.log("num ----> ");
    return num;
  }

  public selectedItemPost(selectedItemJsonData){
    return this.http.post<Itemselected>(this.baseUrl+"archieveItem",selectedItemJsonData);
  }

  getCountOfItem(itemForCount,username):Observable<any>{
    return this.http.get<Category[]>((this.baseUrl+"itemsCount/"+itemForCount+"/"+username));
  }


  getFilteredProducts(categoryName){
    return this.http.get<Category[]>((this.baseUrl+"products/"+categoryName));
  
  }
  

}
