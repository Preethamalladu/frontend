import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Forms/login/login.component';
import { RegisterLoginComponent } from './Forms/reg-customer/reg-customer.component';
import { AdminLoginComponent} from './Forms/login-admin/login-admin.component';
import { RegisterAdminComponent} from './Forms/reg-admin/reg-admin.component';
import { HomeComponent } from './Home/home/home.component';

import { HomepageAdminComponent } from '../app/homepage-admin/homepage-admin.component';
import { CreateRestaurantComponent } from '../app/create-restaurant/create-restaurant.component';
import { RestaurantPageAdminComponent } from '../app/restaurant-page-admin/restaurant-page-admin.component';
import {HomepageCustomerComponent} from '../app/homepage-customer/homepage-customer.component';
import { RestaurantComponent } from '../app/restaurant/restaurant.component';
import { RestaurantHomeMenuComponent } from './restaurant-home-menu/restaurant-home-menu.component';
import { OrdersComponent } from './order/orders/orders.component';
import { OrderHistoryComponent } from './orderHistory/order-history/order-history.component';
import { PaymentComponent } from './payment/payment/payment.component';
import { SuccesspaymentComponent } from './payment/successpayment/successpayment.component';

const routes: Routes = [
  {path: 'customer/homepage', component: HomepageCustomerComponent, pathMatch: 'full'},
  {path:'restaurant/homepage/:id', component: RestaurantHomeMenuComponent, pathMatch: 'full'},
  { path: 'admin/homepage', component: HomepageAdminComponent,pathMatch:'full' },
  { path: 'admin/createrestaurant', component: CreateRestaurantComponent,pathMatch:'full' },
  { path: 'admin/restaurant/:id', component: RestaurantPageAdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterLoginComponent },
  { path: 'admin/register', component: RegisterAdminComponent },
  { path: 'admin', component: AdminLoginComponent },
  { path: 'home', component: HomeComponent },
  
  {
    path: 'orderSummary', 
    component: OrdersComponent,
    pathMatch:"full"
    
  },
  {
    path: 'orderHistory', 
    component: OrderHistoryComponent,
    pathMatch:"full"
    
  },
  {
    path: 'payment', 
    component: PaymentComponent,
    pathMatch:"full"
    
  },
  {
    path: 'success', 
    component: SuccesspaymentComponent,
    pathMatch:"full"
    
  },
  { path: '**', redirectTo: '#' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
