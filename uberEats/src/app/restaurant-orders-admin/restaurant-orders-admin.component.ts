import { Component, OnInit } from '@angular/core';
//import * as Chartist from 'chartist';
declare var require: any
var CanvasJS = require('../canvasjs-2.3.2/canvasjs.min');
import { RestaurantAdminService } from '../restaurant-admin.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-restaurant-orders-admin',
  templateUrl: './restaurant-orders-admin.component.html',
  styleUrls: ['./restaurant-orders-admin.component.scss']
})
export class RestaurantOrdersAdminComponent implements OnInit {
  orders = [{"customer_name":"Ayesh","total":"100$","address":"20 South Point Drive","orders":[{"itemname":"Chicken Biryani","quantity":2,"cost":"10$"},{"itemname":"Chicken fry","quantity":1,"cost":"20$"}]}];
  pendingtoggle=false;
  upcomingtoggle=true;
  pasttoggle=false;
  restaurant_id = "";
  constructor(private restaurantAdminService:RestaurantAdminService, private route:ActivatedRoute) { }
  ngOnInit() {
    this.restaurant_id = this.route.snapshot.paramMap.get('id');
    this.restaurantAdminService.getOrdersByRestaurant(this.restaurant_id,"Pending").subscribe((data: any[])=>{
      console.log(data);
      this.orders = data;
    })


  }
  toggle(val){
    if(val=='upcoming'){
      this.pendingtoggle=false;this.upcomingtoggle=true;this.pasttoggle=false;
      this.restaurantAdminService.getOrdersByRestaurant(this.restaurant_id,"Pending").subscribe((data: any[])=>{
        console.log(data);
        this.orders = data;
      })
    }
    if(val=='pending'){
      this.pendingtoggle=true;this.upcomingtoggle=false;this.pasttoggle=false;
      this.restaurantAdminService.getOrdersByRestaurant(this.restaurant_id,"InProgress").subscribe((data: any[])=>{
        console.log(data);
        this.orders = data;
      })
    }
    if(val=='past'){
      this.pendingtoggle=false;this.upcomingtoggle=false;this.pasttoggle=true;
      this.restaurantAdminService.getOrdersByRestaurant(this.restaurant_id,"Complete").subscribe((data: any[])=>{
        console.log(data);
        this.orders = data;
      })
    }
    console.log(this.pendingtoggle,this.upcomingtoggle,this.pasttoggle);
  }
  updateOrder(res){
      if(res.status=="Pending"){
        this.restaurantAdminService.editOrder(res._id,{"status":"InProgress"}).subscribe((data: any[])=>{
          this.toggle("pending");
        })
      }
      else if(res.status=="InProgress"){
        this.restaurantAdminService.editOrder(res._id,{"status":"Complete"}).subscribe((data: any[])=>{
          this.toggle("past");
        })
      }
      
  }
  
}
