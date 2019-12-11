import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Forms/login/login.component';
import { RegisterLoginComponent } from './Forms/reg-customer/reg-customer.component';
import { RestaurantRegisterComponent } from './Forms/restaurant-reg/restaurant-reg.component';
import { AdminLoginComponent} from './Forms/login-admin/login-admin.component';
import { RegisterAdminComponent} from './Forms/reg-admin/reg-admin.component';
import { HomeComponent } from './Home/home/home.component';

import { HomepageAdminComponent } from '../app/homepage-admin/homepage-admin.component';
import { CreateRestaurantComponent } from '../app/create-restaurant/create-restaurant.component';
import { RestaurantPageAdminComponent } from '../app/restaurant-page-admin/restaurant-page-admin.component';
import {HomepageCustomerComponent} from '../app/homepage-customer/homepage-customer.component';
import { RestaurantComponent } from '../app/restaurant/restaurant.component';
import { RestaurantHomeMenuComponent } from './restaurant-home-menu/restaurant-home-menu.component';

const routes: Routes = [
  {path: 'customer/homepage', component: HomepageCustomerComponent, pathMatch: 'full'},
  {path:'restaurant/homepage/:id', component: RestaurantHomeMenuComponent, pathMatch: 'full'},
  { path: 'admin/homepage', component: HomepageAdminComponent,pathMatch:'full' },
  { path: 'admin/createrestaurant', component: CreateRestaurantComponent,pathMatch:'full' },
  { path: 'admin/restaurant/:id', component: RestaurantPageAdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterLoginComponent },
  { path: 'restuarant/register', component: RestaurantRegisterComponent },
  { path: 'admin/register', component: RegisterAdminComponent },
  { path: 'admin', component: AdminLoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '#' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
