import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantAdminService } from "../restaurant-admin.service";
@Component({
  selector: 'app-homepage-admin',
  templateUrl: './homepage-admin.component.html',
  styleUrls: ['./homepage-admin.component.scss']
})
export class HomepageAdminComponent implements OnInit {
  public firstName: "sd";
  public lastName: "sd";
  restaurants = [];
  isLogged;
  constructor(private router:Router,private restaurantAdminService: RestaurantAdminService) { }

  ngOnInit() {
    this.restaurantAdminService.getRestaurantData().subscribe((data: any[])=>{
      console.log(data);
      this.restaurants = data;
    })  
  }
  navToCreateRestaurant(){
    this.router.navigate(['/admin/createrestaurant']);
  }
  navToRestaurantPage(res){
    
    this.router.navigate(['admin/restaurant/'+res['_id']]);
  }
  logout(){
    this.router.navigate(['/admin']);
  }
}
