import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  @Input()
  name: string;
  @Input()
  price: string;
  @Input()
  id: string;
  @Input()
  rating: string;
  @Input()
  type_of_food: string;
  @Input()
  no_rating: string;
  @Input()
  bgimg: string;

  price_rep ='';
  constructor( private router: Router) { }

  ngOnInit() {
    for(var counter:number = 0; counter < +this.price; counter++){
      this.price_rep += '$'
    }
    console.log(this.id,"sdfasdfasdf")
    
  }

  // once we click a the div, it sends the respective id to the next route with id i.e, restaruant homepage
  next_page(id){
    console.log(this.id);
    this.router.navigate(['restaurant/homepage/'+this.id]); // add id here and change in routing
    
  }

}
