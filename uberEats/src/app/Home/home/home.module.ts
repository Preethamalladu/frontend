

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeRoutingModule} from './home-routing.module';
import { HomeComponent } from './home.component';
//import { RegisterCustomerService } from '@app/core/register-customer.service';
import { AlertService } from '../../Alert.service';

@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    FormsModule

  ],
  declarations: [
    HomeComponent,
  ],
  providers: [ AlertService]
})
export class HomeModule { }
