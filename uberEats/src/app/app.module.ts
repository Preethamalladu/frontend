import {platformBrowser} from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginModule } from './Forms/login/login.module';
import { RegisterModule } from './Forms/reg-customer/reg-customer.module';
import { RestuarantRegisterModule } from './Forms/restaurant-reg/restaurant-reg.module';
import { AdminLoginModule } from './Forms/login-admin/login-admin.module';
import { RegisterAdminModule } from './Forms/reg-admin/reg-admin.module';

import { RegisterCustomerService } from './register-customer.service';
import { AlertService } from '@app/core/Alert.service';
import { RestaurantService } from './restaurant-service.service';
import { AlertComponent } from './Directives/alert/alert.component';

import { AgmCoreModule } from '@agm/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './Home/home/home.module';
//import { DriverRegisterModule } from './Forms/driver-register/driver-register.module';
//import { DriverLoginModule } from './Forms/driver-login/driver-login.module';
//import { RestRegisterComponent } from './Forms/rest-login/rest-login.component';

//import { LoginComponent } from './Forms/login/login.component';
//import { RestaurantLoginComponent } from './Forms/restaurant-login/restaurant-login.component';

//import { Customer } from './Model/Customer.model';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    //DriverLoginModule,
   // RestRegisterComponent,
    //LoginComponent,
   // RestaurantLoginComponent
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
    NoopAnimationsModule
  ],
  providers: [RegisterCustomerService, AlertService, RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
