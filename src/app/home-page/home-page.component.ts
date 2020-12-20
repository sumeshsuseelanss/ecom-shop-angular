import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { LoginComponent } from '../login/login.component'
import { LoginService } from '../service/login.service';
import { HomeService } from '../service/home.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { MessengerService } from '../service/messenger.service';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  category=[];
  products=[]
  subscription: Subscription;
  userNameLoggedIn ;
  isActive= "false";
  categories$;
  cartItem=0
  ProductTotal=0;
  selectedProduct:[][] = [];
  cartItems=[];
  itemDivEnable = false;
  selectedItemJsonData;
  itemCount=0;
  data;

  lcoalStorageUserName:String = "";
 

  constructor(private loginObj : LoginService,private homeService : HomeService,
    private msg: MessengerService,private router: Router) { 
    
  }

  ngOnInit(): void {

    console.log("ngOnInt validation - > "+this.cartItem );
    if(this.cartItem > 0){
      this.itemDivEnable = true
    }
    console.log("ngOnInt flag - > "+this.itemDivEnable );
    this.userNameLoggedIn= this.loginObj.userNameLogin;
    this.categories$  =  this.homeService.getCategories().subscribe(category=> 
    this.category=category);
    this.subscription =  this.homeService.getAllProducts().subscribe(products=> 
    this.products=products);
    this.lcoalStorageUserName= localStorage.getItem("localStorageUserName");

     this.msg.getMsg().subscribe(product =>{
       console.log("inside getMsg--Home Component",product)
     } ) 
   
  }
  
  addToCart(procutCart){
    if(this.cartItem != 0){
      this.itemDivEnable = true
    }
    console.log("procutCart.productName ---> ",procutCart.productName)
    this.homeService.getCountOfItem(procutCart.productName).subscribe( itemCount =>{
      this.itemCount = itemCount;
    });
  console.log("this.itemCount ----------> ",this.itemCount );
  if(this.itemCount == 0){
     this.cartItem++;
     this.ProductTotal=Number(this.ProductTotal)+Number(procutCart.price);
     var selectedItemJsonData={
      selected_item: procutCart.productName, 
      item_count:1,
      item_price: procutCart.price,
      item_image:procutCart.image,
      user_id: this.lcoalStorageUserName
     };
    this.homeService.selectedItemPost(selectedItemJsonData).subscribe( data => {
      this.data = data;
    });
    this.selectedProduct.push(procutCart);
    this.msg.sendMsg(this.selectedProduct);
  }
    
  }

  proceed(selectedProduct){
    console.log("selected products ",selectedProduct);
    localStorage.setItem("storageProductSelected", JSON.stringify(selectedProduct));
    this.router.navigate(['cart']);
  }

}
