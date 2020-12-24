import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../service/messenger.service';
import { Register } from '../modals/Register';
import { Router } from '@angular/router';
import { CartServiceService } from '../service/cart-service.service';
import { HttpClient } from '@angular/common/http';
import { Itemselected } from '../modals/Itemselected';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartTotal;
  cartStorageItem=[];
  cartItemResponse=[];
  userName;
  cartItems$
  deletedItem$;
  totalAmount;
  itemAmount;
  cartFlag: boolean = true;
  lcoalStorageUserName;
  lcoalStorageCartCount;
  totalCount;
  private baseUrl = 'http://localhost:8082/api/v1/items/'; 

  constructor(private msgCart: MessengerService,private router: Router,
    private cartService : CartServiceService,private http: HttpClient,private homeService: HomeService) { }

  ngOnInit() {

    console.log("cart");
    this.cartItems$=this.cartService.getCartItems().subscribe(cartItemResponse =>{
      this.cartItemResponse=cartItemResponse;
      console.log("get cart --> ",cartItemResponse.status);
    }
    );
    this.cartStorageItem = JSON.parse(localStorage.getItem("storageProductSelected"));
    console.log(this.cartStorageItem);
    this.cartTotal=localStorage.getItem("localStoageItemTotal");
    console.log("cart tool",this.cartTotal);
    this.itemTotalAmount();
    this.cartRefresh();
  
  }

  continueCart(){
    
    this.router.navigate(['bill']);
  }

  deleteItem(item){
    this.cartService.deleteCartItem(item).subscribe(deletedItem => {
      
    }
    );
    this.cartRefresh();
    window.location.reload();
    this.itemTotalAmount();
    window.location.reload();
  }

  itemTotalAmount(){
    this.cartService.totalAmount().subscribe(totalAmount => {
      this.totalAmount = totalAmount;
      if(this.totalAmount == null){
        this.cartFlag = false;
      }
      }
    );
  }

  amountIncrease(itemSelectedDOM,itemCount,item_price,itemCart){
    if(Number(itemCount) >= 0){
    let divideInt = Number(item_price)/Number(itemCount);
    console.log("item_price ",item_price,"itemCount ",itemCount,"divideInt ",divideInt)
   let updatedItemCount = Number(itemCount)+1;
   let amountToUpdate  = Number(updatedItemCount) *  Number(divideInt);
     this.cartService.updateItemCount(itemSelectedDOM,updatedItemCount,itemCart).subscribe(itemAmount => {
    }
    );
    this.cartService.updateItemAmount(itemSelectedDOM,amountToUpdate,itemCart).subscribe(updateAmount => {
    }
    );
    this.cartRefresh();
    window.location.reload();
    this.itemTotalAmount();
    window.location.reload();
  }else{
    this.deleteItem(itemSelectedDOM);
    this.cartRefresh();
    window.location.reload();
    this.itemTotalAmount();
    window.location.reload();
   
  }
  }

  amountDecrease(itemSelectedDOM,itemCount,item_price,itemCart){
    if(Number(itemCount) >= 0){
    let divideInt = Number(item_price)/Number(itemCount);
    console.log("item_price ",item_price,"itemCount ",itemCount,"divideInt ",divideInt)
    let updatedItemCount = Number(itemCount)-1;
    console.log("amountDecrease --- ",itemSelectedDOM,updatedItemCount,itemCart);
    let amountToUpdate  = Number(updatedItemCount) *  Number(divideInt);
      this.cartService.updateItemCount(itemSelectedDOM,updatedItemCount,itemCart).subscribe(itemAmount => {
     }
     );
      this.cartService.updateItemAmount(itemSelectedDOM,amountToUpdate,itemCart).subscribe(updateAmount => {
     }
      );
      this.cartRefresh();
     window.location.reload();
     this.itemTotalAmount();
     window.location.reload();
    }else {
      this.deleteItem(itemSelectedDOM);
      this.cartRefresh();
      window.location.reload();
      this.itemTotalAmount();
      window.location.reload();
    }


   }

   cartRefresh(){
    this.lcoalStorageUserName= localStorage.getItem("localStorageUserName");
    this.homeService.getCartCount(this.lcoalStorageUserName).subscribe( totalCount =>{
      this.totalCount = totalCount;
      localStorage.setItem('lcoalStorageCartCount',this.totalCount);
    this.lcoalStorageCartCount =  localStorage.getItem('lcoalStorageCartCount');
    }); 
   }

}
