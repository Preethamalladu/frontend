import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Forms/login/login.component';
import { RegisterLoginComponent } from './Forms/reg-customer/reg-customer.component';
import { RestaurantRegisterComponent } from './Forms/restaurant-reg/restaurant-reg.component';
import { AdminLoginComponent} from './Forms/login-admin/login-admin.component';
import { RegisterAdminComponent} from './Forms/reg-admin/reg-admin.component';
import { HomeComponent } from './Home/home/home.component';

//import { DriverRegisterComponent } from './Forms/driver-register/driver-register.component';
//import { DriverLoginComponent} from './Forms/driver-login/driver-login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterLoginComponent },
  { path: 'restuarant/register', component: RestaurantRegisterComponent },
  { path: 'admin/register', component: RegisterAdminComponent },
  { path: 'admin', component: AdminLoginComponent },
  { path: 'home', component: HomeComponent },
  //{ path: 'driver/register', component: DriverRegisterComponent },
  //{ path: 'driver/login', component: DriverLoginComponent },
  { path: '**', redirectTo: '#' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
