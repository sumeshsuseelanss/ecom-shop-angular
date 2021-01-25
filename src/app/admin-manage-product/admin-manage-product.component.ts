import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HomeService } from '../service/home.service';
import { LoginService } from '../service/login.service';
import { MessengerService } from '../service/messenger.service';
import { AdminManageService } from '../service/admin-manage.service';

@Component({
  selector: 'app-admin-manage-product',
  templateUrl: './admin-manage-product.component.html',
  styleUrls: ['./admin-manage-product.component.scss']
})
export class AdminManageProductComponent implements OnInit, OnDestroy {
  subscriptionProduct: Subscription;
  adminProducts: {productName: string}[];
  filteredProducts: any[];
  p: number = 1;

  constructor(route: ActivatedRoute,private loginObj : LoginService,private homeService : HomeService,
    private msg: MessengerService,private router: Router,private adminManageService : AdminManageService) { }

  ngOnInit(): void {
    this.subscriptionProduct =  this.homeService.getAllProducts().subscribe(adminProducts=> 
     this.filteredProducts = this.adminProducts=adminProducts
     
      );
      console.log("admin products ---> ",this.adminProducts);
  }

  ngOnDestroy(): void{
    this.subscriptionProduct.unsubscribe();
  }

  filter(query: string){
     console.log(query);
     this.filteredProducts = (query) ?
     this.adminProducts.filter(p => p.productName.toLowerCase().includes(query.toLowerCase())) : 
     this.adminProducts;
  }

  delete(pid){
    console.log("delete product ---> ",pid);
    this.adminManageService.deleteProductById(pid).subscribe(deletedProduct => {
      
    }
    );
  }
  

}
