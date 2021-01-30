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
  data=[];

  selectedCountry:Country = new Country(2, 'India');
  countries = [
     new Country(1, 'USA' ),
     new Country(2, 'India' ),
     new Country(3, 'Australia' ),
     new Country(4, 'Brazil')
  ];

  selectedState:State = new State(2, 'Karnataka');
    states = [
     new State(1, 'Tamil Nadu' ),
     new State(2, 'Kerala' ),
     new State(3, 'Karnataka' ),
     new State(4, 'Andra pradesh'),
     new State(5, 'Maharashtra')
  ];
  
  constructor(private router: Router,private billingService: BillingService) { }

  ngOnInit(): void {
  }

  
  saveAddress(){
    this.addressTemplateFlag =false;
    this.addressSaveFlag=true;
    this.saveAdd = this.addresss;
  
    console.log("Save Address---> ",this.saveAdd);
    localStorage.setItem('localStorageAddress', "Address : "+this.saveAdd.firstName+" "+this.saveAdd.lastName+" "+
    this.saveAdd.email+" "+this.saveAdd.address+" "+this.saveAdd.state);
    console.log("localStorageAddress ---> ",localStorage.getItem('localStorageAddress'));
    this.billingService.postAddress(this.saveAdd).subscribe( data => {
  
    });
    localStorage.setItem("addressLocalStoage",JSON.stringify(this.saveAdd));

  }

  proceedPayement(){
    this.savePayment =this.payment;
    localStorage.setItem("paymentLocalStoage",this.savePayment);
    this.router.navigate(['summary']);
  }


}

export class Country {
  constructor(public id: number, public name: string) { }
}


export class State {
  constructor(public id: number, public name: string) { }
}
