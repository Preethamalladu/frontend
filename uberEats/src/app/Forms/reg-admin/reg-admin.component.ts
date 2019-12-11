import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../restaurant-admin.service';
import { Admin } from '../Model/Admin.component';
import { Router } from '@angular/router';
import { AlertService } from '@app/core/Alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register-admin',
  templateUrl: './reg-admin.component.html',
  styleUrls: ['./reg-admin.component.scss']
})
export class RegisterAdminComponent implements OnInit {
  registerForm!: FormGroup;
  admin = new Admin();
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private adminService: AdminService,
              private router: Router,
              private alertService: AlertService) {

                this.registerForm = this.formBuilder.group({
                  name: ['', Validators.required],
                  lastName: ['', Validators.required],
                  phoneNumber: ['', Validators.required],
                  username: ['', Validators.required],
                  email: ['', Validators.required],
                  password: ['', [Validators.required, Validators.minLength(6)]]
              });

              }

  ngOnInit() {

  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.admin.firstName = this.registerForm.value.firstName;
    this.admin.email = this.registerForm.value.email;
    this.admin.password = this.registerForm.value.password;
    this.admin.phone =  this.registerForm.value.phoneNumber;
    this.admin.email =  this.registerForm.value.username;
    this.loading = true;
    this.adminService.postNewAdmin(this.admin).subscribe(
       data => {
                 this.alertService.success('Registration successful', true);
                 this.router.navigate(['login']);
                // this.customer = new Customer();
             },
             error => {
                 this.alertService.error(error);
                 this.loading = false;
      });
  }
}
