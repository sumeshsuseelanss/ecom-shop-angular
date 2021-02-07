import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginService } from './service/login.service';
import { RegisterServiceService } from './service/register-service.service';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { CartComponent } from './cart/cart.component';
import { MessengerService } from './service/messenger.service';
import { HomeService } from './service/home.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BillingPageComponent } from './billing-page/billing-page.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { OrderComponent } from './order/order.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminManageProductComponent } from './admin-manage-product/admin-manage-product.component'
import {NgxPaginationModule} from 'ngx-pagination'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderHistoryComponent } from './order-history/order-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    RegistrationComponent,
    CartComponent,
    NavBarComponent,
    BillingPageComponent,
    SummaryPageComponent,
    OrderComponent,
    AdminPageComponent,
    AdminManageProductComponent,
    OrderHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
      component: LoginComponent
      },
      {
        path: 'home',
      component: HomePageComponent,
      },
      {
        path: 'home/:id',
      component: HomePageComponent,
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
      },
      {
        path: 'order',
        component: OrderComponent
      },
      {
        path: 'admin',
        component: AdminPageComponent
      },
      {
        path: 'admin/manage-products',
        component: AdminManageProductComponent
      },
      {
        path:'order-history',
        component: OrderHistoryComponent
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
