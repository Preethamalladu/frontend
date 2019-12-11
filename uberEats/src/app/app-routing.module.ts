import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageCustomerComponent} from '../app/homepage-customer/homepage-customer.component';
import { RestaurantComponent } from '../app/restaurant/restaurant.component';
import { RestaurantHomeMenuComponent } from './restaurant-home-menu/restaurant-home-menu.component';


const routes: Routes = [
  {path: 'customer/homepage', component: HomepageCustomerComponent, pathMatch: 'full'},
  {path:'restaurant/homepage/:id', component: RestaurantHomeMenuComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
