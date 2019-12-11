import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterLoginComponent } from './reg-customer.component';

const routes: Routes = [
  { path: 'register', component: RegisterLoginComponent, data: { title: 'Register' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class RegisterRoutingModule { }
