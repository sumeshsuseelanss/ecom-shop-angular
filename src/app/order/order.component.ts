import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  ordercalc:Number;
  OrderId;
  localStorageName;
  today;
  constructor() { }

  ngOnInit(): void {
    this.ordercalc=Math.floor(Math.random() * 10) + 15201;
    this.OrderId = "ORDSME"+this.ordercalc;
    console.log("order id ---> ",this.OrderId);  
    this.localStorageName =  localStorage.getItem("localStorageUserName");
     this.today = new Date();
    var dd = String(this.today.getDate()).padStart(2, '0');
    var mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = this.today.getFullYear();
    this.today = yyyy+'-'+mm+'-'+dd;
    console.log("today ",this.today);
   

  }

}
