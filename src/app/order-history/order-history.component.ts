import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderServiceService } from '../service/order-service.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  orderHistRes;

  constructor(route: ActivatedRoute,private router: Router,private orderServiceService : OrderServiceService) { }

  ngOnInit(): void {
    this.orderServiceService.fetchOrderHistByUser().subscribe( orderHistRes =>{
      this.orderHistRes =  orderHistRes;    
     });

  }

}
