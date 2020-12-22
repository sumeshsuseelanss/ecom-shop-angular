import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../service/messenger.service';
import { Register } from '../modals/Register';
import { Router } from '@angular/router';
import { CartServiceService } from '../service/cart-service.service';
import { HttpClient } from '@angular/common/http';
import { Itemselected } from '../modals/Itemselected';

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
  private baseUrl = 'http://localhost:8082/api/v1/items/'; 

  constructor(private msgCart: MessengerService,private router: Router,
    private cartService : CartServiceService,private http: HttpClient) { }

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
  
  }

  continueCart(){
    
    this.router.navigate(['bill']);
  }

  deleteItem(item){
    this.cartService.deleteCartItem(item).subscribe(deletedItem => {
      
    }
    );
    window.location.reload();
    this.itemTotalAmount();
    window.location.reload();
  }

  itemTotalAmount(){
    this.cartService.totalAmount().subscribe(totalAmount => {
      this.totalAmount = totalAmount;
    }
    );
  }

}
