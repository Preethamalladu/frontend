import { Component, OnInit } from '@angular/core';
import { RegisterCustomerService } from '../../register-customer.service';
import { Customer } from '../Model/customer.component';
import { Router } from '@angular/router';
import { AlertService } from '../../Alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register-customer',
  templateUrl: './reg-customer.component.html',
  styleUrls: ['./reg-customer.component.scss']
})
export class RegisterLoginComponent implements OnInit {
  registerForm!: FormGroup;
  customer = new Customer();
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: RegisterCustomerService,
              private router: Router,
              private alertService: AlertService) {

                this.registerForm = this.formBuilder.group({
                  name: ['', Validators.required],
                  lastName: ['', Validators.required],
                  phoneNumber: ['', Validators.required],
                  username: ['', Validators.required],
                  email: ['', Validators.required],
                  password: ['', [Validators.required, Validators.minLength(6)]],
                  cardName: ['', ],
                  exp: ['', ],
                  cv: ['', ],
                  postal: ['', ],
              });

              }

  ngOnInit() {

  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
       this.alertService.error("Invalid Form" );
        return;
    }
    this.customer.name = this.registerForm.value.name;
    this.customer.email = this.registerForm.value.email;
    this.customer.password = this.registerForm.value.password;
    this.customer.phone =  this.registerForm.value.phoneNumber;
    this.customer.username =  this.registerForm.value.username;
    this.customer.creditCard =  this.registerForm.value.cardName;
    this.customer.CVV =  this.registerForm.value.cv;
    this.customer.expiryDate =  this.registerForm.value.expiryDate;
    this.customer.zipCode =  this.registerForm.value.postal;
    this.loading = true;
    this.userService.postNewCustomer(this.customer).subscribe(
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
