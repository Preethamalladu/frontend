import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageAdminComponent } from './homepage-admin/homepage-admin.component';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import { EditRestaurantAdminComponent } from './edit-restaurant-admin/edit-restaurant-admin.component';
import { FormsModule } from '@angular/forms';
import { RestaurantPageAdminComponent } from './restaurant-page-admin/restaurant-page-admin.component';
import { RestaurantOrdersAdminComponent } from './restaurant-orders-admin/restaurant-orders-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantAnalyticsAdminComponent } from './restaurant-analytics-admin/restaurant-analytics-admin.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
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
    HomepageAdminComponent,
    CreateRestaurantComponent,
    EditRestaurantAdminComponent,
    RestaurantPageAdminComponent,
    RestaurantOrdersAdminComponent,
    RestaurantAnalyticsAdminComponent,
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
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    AppRoutingModule,
    RouterModule.forRoot([
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
