import { Component, OnInit } from '@angular/core';
import { RegisterCustomerService } from '../../register-customer.service';
import { Customer } from '../Model/customer.component';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../..//Alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  customer = new Customer();
  loading = false;
  returnUrl: string;
  results;
  submitted = false;

  constructor( private authenticationService : RegisterCustomerService,
               private route: ActivatedRoute,
               private router: Router, private formBuilder: FormBuilder) {
                this.loginForm = this.formBuilder.group({
                  username: ['', Validators.required],
                  password: ['', [Validators.required, Validators.minLength(6)]]
              });

                }

  ngOnInit() {
      // reset login status
      this.authenticationService.logout();
      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  // tslint:disable-next-line:one-line
  onSubmit(){
    this.loading = true;
    let email = this.loginForm.value.username;
    let password = this.loginForm.value.password;
    this.authenticationService.login(email, password)
    .subscribe((data: any) =>{
      console.log(data);
      if (data == null){
        alert("Invalid username or password");
      } else{
        this.authenticationService.setIsLoggedIn();
        localStorage.setItem('data', data);
        localStorage.setItem('token', data.token);
         alert('Login successful');
         this.router.navigate(['/customer/homepage']);
      }
    },
    error => console.log('oops', error)
    );
  }
}
