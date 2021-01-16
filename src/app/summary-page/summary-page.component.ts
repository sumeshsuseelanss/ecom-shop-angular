import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../modals/Address';
import { BillingService } from '../service/billing.service';
import { CartServiceService } from '../service/cart-service.service';

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
  constructor(private router: Router,private billingService: BillingService,private cartService : CartServiceService) {

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
    this.router.navigate(['order']);
  }

}
