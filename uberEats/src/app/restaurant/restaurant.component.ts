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

  price_rep ='';
  constructor( private router: Router) { }

  ngOnInit() {
    for(var counter:number = 0; counter < +this.price; counter++){
      this.price_rep += '$'
    }
    
  }

  next_page(id){
    this.router.navigate(['restaurant/homepage/'+id]); // add id here and change in routing
    
  }

}
