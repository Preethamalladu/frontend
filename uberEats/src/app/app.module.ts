import {platformBrowser} from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
// import { TranslateModule } from '@ngx-translate/core';

import { LoginModule } from './Forms/login/login.module';
import { RegisterModule } from './Forms/reg-customer/reg-customer.module';
import { AdminLoginModule } from './Forms/login-admin/login-admin.module';
import { RegisterAdminModule } from './Forms/reg-admin/reg-admin.module';

import { RegisterCustomerService } from './register-customer.service';
// import { AlertService } from '@app/core/Alert.service';
import { AlertComponent } from './Directives/alert/alert.component';

import { AgmCoreModule } from '@agm/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './Home/home/home.module';
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
import { RouterModule } from '@angular/router';
import { OrdersComponent } from './order/orders/orders.component';
import { OrderHistoryComponent } from './orderHistory/order-history/order-history.component';
import { PaymentComponent } from './payment/payment/payment.component';
import { SuccesspaymentComponent } from './payment/successpayment/successpayment.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarcompComponent } from './navbarcart/navbarcomp/navbarcomp.component';
import { HomepageCustomerComponent } from './homepage-customer/homepage-customer.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantHomeMenuComponent } from './restaurant-home-menu/restaurant-home-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
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
    HttpClientModule,
    LoginModule,
    RegisterModule,
    AdminLoginModule,
    RegisterAdminModule,
    HomeModule,
    //DriverRegisterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBI-fMrs51j5nRg0fw6xLsMMSljUNnOkfo'
    }),
    NoopAnimationsModule,
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
      
    ]),
    BrowserAnimationsModule
  ],
  providers: [RegisterCustomerService],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
