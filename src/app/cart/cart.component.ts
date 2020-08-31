import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../messenger.service';
import { Register } from '../modals/Register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartTotal;
  cartStorageItem=[];


  constructor(private msgCart: MessengerService,private router: Router) { }

  ngOnInit() {

    console.log("cart");
    this.cartStorageItem = JSON.parse(localStorage.getItem("storageProductSelected"));
    console.log(this.cartStorageItem);
    this.cartTotal=localStorage.getItem("localStoageItemTotal");
    console.log("cart tool",this.cartTotal);
  
  }

  continueCart(){
    
    this.router.navigate(['bill']);
  }

}
