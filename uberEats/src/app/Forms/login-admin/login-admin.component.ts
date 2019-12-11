import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../Alert.service';
import { RestaurantAdminService} from '../../restaurant-admin.service';
import { Admin } from '../Model/Admin.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-rest',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class AdminLoginComponent implements OnInit {

  admin = new Admin();
  loading = false;
  returnUrl: string;
  restLoginForm!: FormGroup;

  constructor(private adminService: RestaurantAdminService,
              private route: ActivatedRoute,
              private router: Router,
              private alertService: AlertService) { }

  ngOnInit() {
      // reset login status
      this.adminService.logout();
      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }


   // tslint:disable-next-line:one-line
   onSubmit(){
    this.loading = true;
    const email = this.admin.email;
    const password = this.admin.password;
    //this.restaurant.email = this.restLoginForm.value.email;
    //this.restaurant.password = this.restLoginForm.value.password;
    this.loading = true;
    this.adminService.login(this.admin.email,this.admin.password).subscribe((data : any) => {
        if (data == 404) {
          alert('Invalid username or password');
        } else if (data == null) {
            alert('Please check your internet connection and try again later');
        } else {
          //this.adminService.setIsLoggedIn();
          //sessionStorage.setItem('id', data.Id);
          sessionStorage.setItem('email', data.email);
          sessionStorage.setItem('password', data.password);
          alert('Admin Login successful');
          this.router.navigate(['/login.html/username/userRole=3']);
        }
    });

  }
}
