import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


import { RegisterLoginComponent } from './reg-customer.component';
import { RegisterRoutingModule } from './reg-customer-routing.module';
//import { Customer } from './Model/customer.component';
import { RegisterCustomerService } from '@app/core/register-customer.service';
import { AlertService } from '@app/core/Alert.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    FormsModule,
    //FormBuilder,
    RegisterRoutingModule,

  ],
  declarations: [
    RegisterLoginComponent,
  ],
  providers: [RegisterCustomerService,AlertService]
})
export class RegisterModule { }
