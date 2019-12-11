import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


import { RegisterAdminComponent } from './reg-admin.component';
import { RegisterAdminRoutingModule } from './reg-admin-routing.module';
//import { Customer } from './Model/customer.component';
import { RestaurantAdminService } from '../../restaurant-admin.service';
import { AlertService } from '../../Alert.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    FormsModule,
    RegisterAdminRoutingModule
    //FormBuilder,

  ],
  declarations: [
    RegisterAdminComponent,
  ],
  providers: [RestaurantAdminService, AlertService]
})
export class RegisterAdminModule { }
