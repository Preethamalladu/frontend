import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterAdminComponent } from './reg-admin.component';

const routes: Routes = [
  { path: 'admin', component: RegisterAdminComponent, data: { title: 'Register Admin' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class RegisterAdminRoutingModule { }
