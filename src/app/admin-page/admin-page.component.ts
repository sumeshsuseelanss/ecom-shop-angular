import { Component, OnInit } from '@angular/core';
import { Products } from '../modals/Products';
import { AdminServiceService } from '../service/admin-service.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  product: Products = new Products();
  adminFlag:boolean;

  selectedCategory:Category = new Category(2, 'India');
  categories = [
     new Category(1, 'Vegetables' ),
     new Category(2, 'Bread' ),
     new Category(3, 'Spices' ),
     new Category(4, 'Fruits')
  ];

  constructor(private adminServiceService : AdminServiceService) { }

  ngOnInit(): void {
  }


  saveProduct(){
    console.log("added product ",this.product);
    this.adminServiceService.addProduct(this.product).subscribe( prod => {
  
    });
  }

 

}

export class Category {
  constructor(public id: number, public name: string) { }
}
