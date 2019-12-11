import { Component, OnInit } from '@angular/core';
import {LocationServiceService } from '../location-service.service'
import { RestaurantServiceService } from '../restaurant-service.service'
import {Router} from '@angular/router'


@Component({
  selector: 'app-homepage-customer',
  templateUrl: './homepage-customer.component.html',
  styleUrls: ['./homepage-customer.component.scss']
})
export class HomepageCustomerComponent implements OnInit {
  

  something: string;
  public troy: string;
  tcode: string;
  location = "click here to get current location";
  restaurants = []
  
  constructor(private router: Router,private restList: RestaurantServiceService,private loc: LocationServiceService) { 
    this.getlocationData = this.getlocationData.bind(this);
    this.restList.sendGetRequest().subscribe((data: any[]) => {
      
      this.restaurants = data;

    })
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(this.getlocationData)
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

  search() {
    this.restList.sendSearchRequest(this.tcode).subscribe((data: any[]) => {
      console.log(data);
      this.restaurants = data;

    })
  }
  signout(){
    localStorage.removeItem("token");
    console.log(localStorage.getItem("token"))
    this.router.navigateByUrl('/home');
  }



  // test(){
  //   if(navigator.geolocation){
  //     this.something
  //     var test= "";
  //     navigator.geolocation.getCurrentPosition(function(location) {
  //       var apikey = 'c564ed35c5dc4c8a9dfc7c2f5daf0b01';
  //       var latitude = location.coords.latitude.toString();
  //       var longitude = location.coords.longitude.toString();
        
  //       var api_url = 'https://api.opencagedata.com/geocode/v1/json';
  //       var request_url = api_url
  //         + '?'
  //         + 'key=' + apikey
  //         + '&q=' + encodeURIComponent(latitude + ',' + longitude)
  //         + '&pretty=1'
  //         + '&no_annotations=1';
  //       var request = new XMLHttpRequest();
  //       var sup = "";
  //       request.open('GET', request_url, true);
        
  //       request.onload = function(this) {
  //         // see full list of possible response codes:
  //         // https://opencagedata.com/api#codes
  //         var that = this;
  //         if (request.status == 200){ 
  //           // Success!
  //           console.log("suck")
  //           var data = JSON.parse(request.responseText);
  //           var location = data.results[0].formatted.toString();
  //           console.log(typeof location);
  //           this
            
  //         } else if (request.status <= 500){ 
  //           // We reached our target server, but it returned an error
                                 
  //           console.log("unable to geocode! Response code: " + request.status);
  //           var data = JSON.parse(request.responseText);
  //           console.log(data.status.message);
  //         } else {
  //           console.log("server error");
  //         }
  //       };
        
  //       request.onerror = function() {
  //         // There was a connection error of some sort
  //         console.log("unable to connect to server");        
  //       };
        
  //       request.send();

  //     })
  //   }else{
  //     alert("unable to get location");
  //   }
  // }
  


}


                           

