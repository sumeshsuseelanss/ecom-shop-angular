import { Component, OnInit } from '@angular/core';
import { Address } from '../modals/Address';
import { Payment } from '../modals/Payment';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-billing-page',
  templateUrl: './billing-page.component.html',
  styleUrls: ['./billing-page.component.scss']
})
export class BillingPageComponent implements OnInit {
  addresss: Address = new Address();
  payment: Payment = new Payment();
  saveAdd;
  saveTest;
  savePayment;
  addressTemplateFlag =true;
  addressSaveFlag = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  saveAddress(){
    this.addressTemplateFlag =false;
    this.addressSaveFlag=true;
    this.saveAdd = this.addresss;
    localStorage.setItem("addressLocalStoage",JSON.stringify(this.saveAdd));
  }

  proceedPayement(){
    console.log("payment - > ",this.payment);
    this.savePayment =this.payment;
    localStorage.setItem("paymentLocalStoage",this.savePayment);
    this.router.navigate(['summary']);
  }


}
