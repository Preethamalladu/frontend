import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-restaurant-page-admin',
  templateUrl: './restaurant-page-admin.component.html',
  styleUrls: ['./restaurant-page-admin.component.scss']
})
export class RestaurantPageAdminComponent implements OnInit {
  restaurantpage=true;
  analytics=false;
  orderspage=false;
  restaurant_id="";
  constructor(private route:ActivatedRoute) { }
  ngOnInit() {
    this.restaurant_id = this.route.snapshot.paramMap.get('id');
    var header = document.getElementById("topnav2");
    var btns = header.getElementsByClassName("a");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var header = document.getElementById("topnav2");
      var current = header.getElementsByClassName("active");
      console.log(current);
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
    }
  }
  gg(){
    console.log(this.restaurantpage,this.analytics,this.orderspage)
  }
  toggle(val){
    if(val=='restaurant'){
      this.restaurantpage=true;this.analytics=false;this.orderspage=false;
    }
    if(val=='analytics'){
      this.restaurantpage=false;this.analytics=true;this.orderspage=false;
    }
    if(val=='orders'){
      this.restaurantpage=false;this.analytics=false;this.orderspage=true;
    }
    console.log(this.restaurantpage,this.analytics,this.orderspage);
  }
}
