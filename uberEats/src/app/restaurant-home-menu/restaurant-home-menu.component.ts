import { Component, OnInit } from '@angular/core';
import {LocationServiceService } from '../location-service.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router'
import { RestaurantServiceService } from '../restaurant-service.service'
@Component({
  selector: 'app-restaurant-home-menu',
  templateUrl: './restaurant-home-menu.component.html',
  styleUrls: ['./restaurant-home-menu.component.scss']
})
export class RestaurantHomeMenuComponent implements OnInit {
  private routeSub: Subscription;
  menu_data = [
    {
      _id: "biyani",
      menu:[
        {
          name: "name",
          description: "desc",
          img: "https://picsum.photos/200",
          price: "10",
          isavailable: false
        },
        {
          name: "name",
          description: "desc",
          img: "https://picsum.photos/200",
          price: "10",
          isavailable: false
        },
        {
          name: "name",
          description: "desc",
          img: "https://picsum.photos/200",
          price: "10",
          isavailable: false
        },
      ]
    },
    {
      _id: "giyani",
      menu:[
        {
          name: "name",
          description: "desc",
          img: "https://picsum.photos/200",
          price: "10",
          isavailable: false
        },
        {
          name: "name",
          description: "desc",
          img: "https://picsum.photos/200",
          price: "10",
          isavailable: false
        },
        {
          name: "name",
          description: "desc",
          img: "https://picsum.photos/200",
          price: "10",
          isavailable: false
        },
      ]
    },
    {
      _id: "biyani",
      menu:[
        {
          name: "name",
          description: "desc",
          img: "https://picsum.photos/200",
          price: "10",
          isavailable: false
        },
        {
          name: "name",
          description: "desc",
          img: "https://picsum.photos/200",
          price: "10",
          isavailable: false
        },
        {
          name: "namasdasdsade",
          description: "desc",
          img: "https://picsum.photos/200",
          price: "10",
          isavailable: false
        },
      ]
    }

  ]
  menu_id = 0;
  cart_data = []
  total_price = 0
  location = "click here to get current location";
  cur_rest;
  name = "";
  price = "";
  rating = "";
  no_rating = "";
  type_of_food = "";
  constructor(private router: Router,private rest: RestaurantServiceService,private loc: LocationServiceService, private route: ActivatedRoute) {
    this.getlocationData = this.getlocationData.bind(this);
    
   }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(this.getlocationData)
    if(JSON.parse( localStorage.getItem('order') ) != null ){
      this.cart_data = JSON.parse( localStorage.getItem('order') )
      this.cart_data.forEach(item => {
        this.total_price += item.price;
      });
      this.total_price = parseFloat(this.total_price.toFixed(2));
      this.routeSub = this.route.params.subscribe(params => {
       
        this.menu_id = params['id'] //log the value of id
      });
      

    }

    //get menu by restId
    this.rest.getRestByid(this.menu_id).subscribe((data: any[]) => {
      
      this.cur_rest = data;
      for(var counter:number = 0; counter < +data["price"]; counter++){
        this.price += '$'
      }
      this.name = data["name"];
      this.rating = data["rating"];
      this.no_rating =data["no_rating"];
      this.type_of_food = data["type_of_food"];
      console.log(data, this.price);
    })


  }

 
  test(){
    navigator.geolocation.getCurrentPosition(this.getlocationData)
}

  getlocationData(data){
    var latitude = data.coords.latitude.toString();
    var longitude = data.coords.longitude.toString();
    this.loc.sendGetRequest(latitude,longitude).subscribe((data: any[]) => {
      console.log(data["results"][0]["formatted"]);
      if(data["status"]["code"] == "200"){
        this.location = data["results"][0]["formatted"]
      }else{
        alert("unable to get location");
      }

    })
  }

  scroll(id) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    el.scrollIntoView({behavior: "smooth"});
  }

  isShow = true;
 
  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  addItem(dish){
    this.cart_data.push(dish)
    this.isShow  = false
    this.total_price +=  dish.price
    this.total_price = parseFloat(this.total_price.toFixed(2));
    localStorage.setItem('order', JSON.stringify(this.cart_data))
    
  }

  removeItem(order){
    var index = this.cart_data.indexOf(order);
    if (index > -1) {
      this.cart_data.splice(index, 1);
      this.total_price -= order.price
      this.total_price = parseFloat(this.total_price.toFixed(4));
    }
    localStorage.setItem('order', JSON.stringify(this.cart_data))
  }

  checkoutButton(){
    console.log(this.cart_data);
    var send_out = [] ;
    var name = {};
    var price = {};
    this.cart_data.forEach(element => {
      if (!(element["name"] in name)){
        name[element["name"]] = 1;
      }else{
        name[element["name"]] += 1;
      }
      price[element["name"]] = element["price"]
    });

    Object.keys(name).forEach(function(key){
      send_out.push({"name":key, "price":price[key], "quantity":name[key]})
    })

    this.router.navigateByUrl('/orderSummary', {state:{isPayment:true, data:send_out}});

    
  }

}
