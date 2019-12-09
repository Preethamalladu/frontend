import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
//import { Customer } from './Model/customer.component';
import { RegisterCustomerService } from '@app/core/register-customer.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    FormsModule,
    LoginRoutingModule,

  ],
  declarations: [
    LoginComponent,
  ],
  providers: [RegisterCustomerService]
})
export class LoginModule { }
