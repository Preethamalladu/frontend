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
        if (!data.token) {
          this.alertService.error('Invalid Credentials', true);
        } else if (data == null) {
          this.alertService.error('Internal Servel Error', true);
        } else {
          //this.adminService.setIsLoggedIn();
          //sessionStorage.setItem('id', data.Id);
          localStorage.setItem('data', data);
          localStorage.setItem('token', data.token);
          this.alertService.success('Login Succesful');
          this.router.navigate(['/admin/homepage']);
        }
    },
    error => this.alertService.error(error)
    );
  }
}
