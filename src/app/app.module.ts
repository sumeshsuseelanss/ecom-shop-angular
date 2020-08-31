import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginService } from './login.service';
import { RegisterServiceService } from './register-service.service';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { CartComponent } from './cart/cart.component';
import { MessengerService } from './messenger.service';
import { HomeService } from './home.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BillingPageComponent } from './billing-page/billing-page.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    RegistrationComponent,
    CartComponent,
    NavBarComponent,
    BillingPageComponent,
    SummaryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
      component: LoginComponent
      },
      {
        path: 'home',
      component: HomePageComponent
      },
      {
        path: 'register',
      component: RegistrationComponent
      },
      {
      path: 'cart',
      component: CartComponent
      },
      {
        path: 'bill',
        component: BillingPageComponent
      },
      {
        path: 'summary',
        component: SummaryPageComponent
      }
    ])
  ],
  providers: [
    LoginService,
    RegisterServiceService,
    MessengerService,
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
