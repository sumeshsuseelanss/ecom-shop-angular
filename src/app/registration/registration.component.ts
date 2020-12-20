import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterServiceService } from '../service/register-service.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Register } from '../modals/Register';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
  employeeForm : FormGroup
  register: Register = new Register();
  userLoginDataJson;
  

  constructor(private http:HttpClient,private registerService : RegisterServiceService,private router: Router) { }

  ngOnInit(): void {
  }


  createUser(): void {
    console.log("register- > ",this.register.fullName);
    this.registerService.createUser(this.register)
        .subscribe();
     var userLoginData={
      userId: 200, 
      userName: this.register.userName, 
      password: this.register.password 
    };
    this.userLoginDataJson = userLoginData
    this.registerService.loginUser(this.userLoginDataJson)
    .subscribe( data => {
      alert("User pushed in to login table");
    });
    this.router.navigate(['']);
  };

}
