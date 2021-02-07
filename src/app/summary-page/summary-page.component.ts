import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../modals/Address';
import { BillingService } from '../service/billing.service';
import { CartServiceService } from '../service/cart-service.service';
import { OrderServiceService } from '../service/order-service.service';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent implements OnInit {
  summaryAdress: Array<Address>;
  summaryPayment;
  summaryItem=[];;
  summaryItemTotal;
  summaryItemResponse=[];
  summaryAddress;
  orderTrackItems$
  orderItemResponse=[];
  ordercalc:Number;
  today;
  orderedItem_value;
  totalAmount_value;
  orderID_value;
  user_ID_value;
  orderDate_value;
  orderResponse;

  constructor(private router: Router,private billingService: BillingService,
    private cartService : CartServiceService,private orderServiceService:OrderServiceService) {

   }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(summaryItemResponse =>{
      this.summaryItemResponse=summaryItemResponse;
      console.log("get cart --> ",summaryItemResponse);
    }
    );

    this.summaryAddress = JSON.parse(localStorage.getItem("addressLocalStoage"));
    console.log("this.summaryAddress -----> ",this.summaryAddress); 
  }

  OrderProceed(){
    this.orderTrackItems$=this.cartService.getCartItems().subscribe(orderItemResponse =>{
      this.orderItemResponse=orderItemResponse;
      console.log("orderItemResponse.length --> ",orderItemResponse.length);
      for (let i = 0; i < orderItemResponse.length; i++) {
        this.orderedItem_value=orderItemResponse[i].selected_item+" "+this.orderedItem_value;
      }
        this.ordercalc=Math.floor(Math.random() * 10) + 15201;
        this.orderID_value = this.ordercalc;
         this.today = new Date();
         var dd = this.today.getDate();
         var mm = this.today.getMonth()+1; 
         var yyyy = this.today.getFullYear();
        if(dd<10) 
          {
           dd='0'+dd;
          } 
        if(mm<10) 
          {
           mm='0'+mm;
          } 
            this.today = yyyy+'-'+dd+'-'+mm;
            this.orderDate_value = this.today;
            this.user_ID_value =  localStorage.getItem("localStorageUserName");
            this.totalAmount_value = localStorage.getItem("totalAmountLocalStorage");
            console.log("this.totalAmount_value ---> ",this.totalAmount_value)
            var orderPlaceJsonData={
              orderedItem: this.orderedItem_value, 
              totalAmount:this.totalAmount_value,
              orderID: this.orderID_value,
              user_ID: this.user_ID_value,
              orderDate: this.orderDate_value
            };

            this.orderServiceService.placeOrder(orderPlaceJsonData).subscribe(orderResponse => {
              this.orderResponse =orderResponse;
            });
            
      }
    );
    this.router.navigate(['order']);
  }



}
