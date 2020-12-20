import { Component, OnInit } from '@angular/core';
import { Address } from '../modals/Address';
import { Payment } from '../modals/Payment';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { BillingService } from '../service/billing.service';

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
  constructor(private router: Router,private billingService: BillingService) { }

  ngOnInit(): void {
  }

  
  saveAddress(){
    this.addressTemplateFlag =false;
    this.addressSaveFlag=true;
    this.saveAdd = this.addresss;
    console.log("Save Address---> ",this.saveAdd);
    this.billingService.postAddress(this.saveAdd).subscribe( data => {
      alert(" pushed");
    });
    localStorage.setItem("addressLocalStoage",JSON.stringify(this.saveAdd));

  }

  proceedPayement(){
    this.savePayment =this.payment;
    localStorage.setItem("paymentLocalStoage",this.savePayment);
    this.router.navigate(['summary']);
  }


}
