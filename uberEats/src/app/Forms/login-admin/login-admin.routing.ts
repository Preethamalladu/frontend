import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLoginComponent } from './login-admin.component';

const routes: Routes = [
  { path: 'admin', component: AdminLoginComponent, data: { title: 'Login Admin' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdminLoginRoutingModule { }
