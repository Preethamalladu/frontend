import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CustomerProfileComponent } from './profile/customer-profile/customer-profile.component';
// import { RestaurantProfileComponent } from './profile/restaurant-profile/restaurant-profile.component';
import { RouterModule } from '@angular/router';
import { OrdersComponent } from './order/orders/orders.component';
import { FormsModule } from '@angular/forms';
import { OrderHistoryComponent } from './orderHistory/order-history/order-history.component';
import { PaymentComponent } from './payment/payment/payment.component';
import { SuccesspaymentComponent } from './payment/successpayment/successpayment.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarcompComponent } from './navbarcart/navbarcomp/navbarcomp.component';
import { HomepageCustomerComponent } from './homepage-customer/homepage-customer.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantHomeMenuComponent } from './restaurant-home-menu/restaurant-home-menu.component';
@NgModule({
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    // CustomerProfileComponent,
    // RestaurantProfileComponent,
    // CustomerProfileComponent,
    // RestaurantProfileComponent,
    OrdersComponent,
  HomepageCustomerComponent,
    RestaurantComponent,
    RestaurantHomeMenuComponent,
    OrderHistoryComponent,
    PaymentComponent,
    SuccesspaymentComponent,
    NavbarcompComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    AppRoutingModule,
  HttpClientModule,
    RouterModule.forRoot([
      
      {
        path: 'profile/restaurant/:customerID', 
        component: RestaurantProfileComponent,
        pathMatch:"full"
      },
      {
        path: 'orderSummary', 
        component: OrdersComponent,
        pathMatch:"full",
        data: [{ name: 'Heroes List' },{ name: 'Heroes List' },{ name: 'Heroes List' },{ name: 'Heroes List' }]
      },
      {
        path: 'orderHistory', 
        component: OrderHistoryComponent,
        pathMatch:"full"
        // state: [{ name: 'Heroes List' },{ name: 'Heroes List' },{ name: 'Heroes List' },{ name: 'Heroes List' }]
      },
      {
        path: 'payment', 
        component: PaymentComponent,
        pathMatch:"full"
        // state: [{ name: 'Heroes List' },{ name: 'Heroes List' },{ name: 'Heroes List' },{ name: 'Heroes List' }]
      },
      {
        path: 'success', 
        component: SuccesspaymentComponent,
        pathMatch:"full"
        // state: [{ name: 'Heroes List' },{ name: 'Heroes List' },{ name: 'Heroes List' },{ name: 'Heroes List' }]
      }

    
    ]),
    BrowserAnimationsModule
  ]
})

export class AppModule { }
