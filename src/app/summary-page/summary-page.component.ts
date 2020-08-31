import { Component, OnInit } from '@angular/core';
import { Address } from '../modals/Address';

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
  constructor() { }

  ngOnInit(): void {
    this.summaryAdress=JSON.parse(localStorage.getItem("addressLocalStoage"));
    this.summaryPayment=localStorage.getItem("paymentLocalStoage");
    this.summaryItem=JSON.parse(localStorage.getItem("storageProductSelected"));
    this.summaryItemTotal=localStorage.getItem("storageProductSelected");
    console.log("address -->",this.summaryAdress)
  }

  OrderProceed(){
    console.log("Order Now ...");
  }

}
