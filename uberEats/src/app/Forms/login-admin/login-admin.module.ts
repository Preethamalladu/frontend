import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


import { AdminLoginRoutingModule} from './login-admin.routing';
import { AdminLoginComponent } from './login-admin.component';
//import { Customer } from './Model/customer.component';
import { RestaurantAdminService } from '../../restaurant-admin.service';
import { AlertService } from '../../Alert.service';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    FormsModule,
    //FormBuilder,
    AdminLoginRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD4yu7QxoQN1GRdKKcW3vfWmnWIAgJ9DKI'
    })

  ],
  declarations: [
    AdminLoginComponent,
  ],
  providers: [RestaurantAdminService, AlertService]
})
export class AdminLoginModule { }
