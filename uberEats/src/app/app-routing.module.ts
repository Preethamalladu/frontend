import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageAdminComponent } from '../app/homepage-admin/homepage-admin.component';
import { CreateRestaurantComponent } from '../app/create-restaurant/create-restaurant.component';
import { RestaurantPageAdminComponent } from '../app/restaurant-page-admin/restaurant-page-admin.component';
const routes: Routes = [{ path: 'admin/homepage', component: HomepageAdminComponent,pathMatch:'full' },{ path: 'admin/createrestaurant', component: CreateRestaurantComponent,pathMatch:'full' },{ path: 'admin/restaurant/:id', component: RestaurantPageAdminComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
