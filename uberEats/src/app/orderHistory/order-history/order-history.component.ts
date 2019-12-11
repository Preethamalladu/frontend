import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavbarcompComponent} from '../../navbarcart/navbarcomp/navbarcomp.component'
@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  
  orderHistory: any=[];
  constructor(private router: Router) { 


  }

  ngOnInit() {
    this.orderHistory=[{"price":"43567890","orderId":"456789","datetime":"234567","items":[{"name":"dfbdb","quantity":12,"price":12},{"name":"wertyr","quantity":4 ,"price":20},{"name":"dfbdb","quantity":12,"price":12},{"name":"wertyr","quantity":4 ,"price":20},{"name":"dfbdb","quantity":12,"price":12},{"name":"wertyr","quantity":4 ,"price":20},{"name":"dfbdb","quantity":12,"price":12},{"name":"wertyr","quantity":4 ,"price":20},{"name":"dfbdb","quantity":12,"price":12},{"name":"wertyr","quantity":4 ,"price":20},{"name":"dfbdb","quantity":12,"price":12},{"name":"wertyr","quantity":4 ,"price":20}]
  }]
  }

  navigateToOrderSummary(event:any,element:any) {
    console.log(element);
    console.log(1234,element);
    this.router.navigateByUrl('/orderSummary',{state:{isPayment:false,data:element.items}});
 }
}
