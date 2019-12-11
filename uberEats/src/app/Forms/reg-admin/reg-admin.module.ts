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
import { AdminService } from '@app/core/admin.service';
import { AlertService } from '@app/core/Alert.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    FormsModule,
    //FormBuilder,

  ],
  declarations: [
    RegisterAdminComponent,
  ],
  providers: [AdminService, AlertService]
})
export class RegisterAdminModule { }
