import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HomeService } from '../service/home.service';
import { LoginService } from '../service/login.service';
import { MessengerService } from '../service/messenger.service';

@Component({
  selector: 'app-admin-manage-product',
  templateUrl: './admin-manage-product.component.html',
  styleUrls: ['./admin-manage-product.component.scss']
})
export class AdminManageProductComponent implements OnInit {
  subscriptionProduct: Subscription;
  adminProducts=[];

  constructor(route: ActivatedRoute,private loginObj : LoginService,private homeService : HomeService,
    private msg: MessengerService,private router: Router) { }

  ngOnInit(): void {
    this.subscriptionProduct =  this.homeService.getAllProducts().subscribe(adminProducts=> 
      this.adminProducts=adminProducts
     
      );
      console.log("admin products ---> ",this.adminProducts);
  }
  

}
