import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
import { MessengerService } from '../messenger.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  lcoalStorageUserName:String = "";

  constructor(private loginObj : LoginService,private homeService : HomeService,
    private msg: MessengerService,private router: Router) { }

  ngOnInit(): void {
    this.lcoalStorageUserName= localStorage.getItem("localStorageUserName");

  }

}
