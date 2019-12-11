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

@NgModule({
  declarations: [
    AppComponent,
    HomepageAdminComponent,
    CreateRestaurantComponent,
    EditRestaurantAdminComponent,
    RestaurantPageAdminComponent,
    RestaurantOrdersAdminComponent,
    RestaurantAnalyticsAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
