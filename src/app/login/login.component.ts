import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup,FormControl, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Register } from 'src/app/modals/Register';
import { Login } from 'src/app/modals/Login';
import {RegisterServiceService} from 'src/app/register-service.service';
import {LoginService} from 'src/app/login.service';
import { Router } from '@angular/router';


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

constructor( private loginService : LoginService,private router: Router) { }  


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
    this.hideError = true;

  //   if(this.responseStatus == '500'){
  //     console.log("may be ",this.responseStatus);
  //    this.router.navigate(['register']);
  //  }
  
  }

  
}
