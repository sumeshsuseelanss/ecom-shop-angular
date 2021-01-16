import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { HomeService } from '../service/home.service';
import { Router } from '@angular/router';
import { MessengerService } from '../service/messenger.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  lcoalStorageUserName:String = "";
  lcoalStorageCartCount:String = "";
  adminFlag=false;

  constructor(private loginObj : LoginService,private homeService : HomeService,
    private msg: MessengerService,private router: Router) { }

  ngOnInit(): void {
    this.lcoalStorageUserName= localStorage.getItem("localStorageUserName");
    this.lcoalStorageCartCount= localStorage.getItem("lcoalStorageCartCount");
    if(localStorage.getItem('userRole') == 'admin'){
      this.adminFlag = true;
      console.log(" user is admin ",this.adminFlag );
      
   }else{
    this.adminFlag = false;
     console.log(" user is NOT admin ",this.adminFlag );
   }

  }

}
