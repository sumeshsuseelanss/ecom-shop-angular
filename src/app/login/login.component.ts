import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup,FormControl, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Register } from 'src/app/modals/Register';
import { Login } from 'src/app/modals/Login';
import {RegisterServiceService} from 'src/app/service/register-service.service';
import {LoginService} from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { LoginAuthService } from '../login-auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {

employeeForm : FormGroup
login: Login  = new Login();
username
hideRegister = true;
hideError = false;

@Output() cOutput =  new EventEmitter();

constructor( private loginService : LoginService,private router: Router,
  private loginAuthService: LoginAuthService) { }  


  ngOnInit() {
    this.username="";
   this.employeeForm = new FormGroup ({
      userName : new FormControl(),
      password : new FormControl()
   }
   );
 
  }

  LoginUser(): void{
    this.username = this.employeeForm.controls.userName.value
    this.loginService.getUsers(this.username);
    this.hideError = true
  }
}
