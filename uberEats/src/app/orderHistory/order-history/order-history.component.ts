import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavbarcompComponent} from '../../navbarcart/navbarcomp/navbarcomp.component'
import { HttpClient } from '@angular/common/http';
import { OrderHistoryService } from '../../order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  private orderHistory: any=[];
  constructor(private router: Router,private ordersService:OrderHistoryService) { 
// var userId="5df05ac681681b04e4e27612";
sessionStorage.setItem("userId","5df05ac681681b04e4e27612");
var userId:String;
    try{
      
      if(sessionStorage.getItem("userId")!=null){
       userId=sessionStorage.getItem("userId")}
  }
  catch(e){console.log("userId not found");}
  console.log(userId);
  var c:any=[];
    this.ordersService.getOrdersByUserId(userId).subscribe((data:any)=>{
     this.orderHistory=data;
     console.log(data);
    });
    
    // console.log(this.orderHistory);
    // console.log(c);

  }

  ngOnInit() {
    
    // this.orderHistory=[{"totalCost":"43567890","orderId":"456789","datetime":"234567","items":[{"name":"dfbdb","quantity":12,"price":12},{"name":"wertyr","quantity":4 ,"price":20},{"name":"dfbdb","quantity":12,"price":12},{"name":"wertyr","quantity":4 ,"price":20},{"name":"dfbdb","quantity":12,"price":12},{"name":"wertyr","quantity":4 ,"price":20},{"name":"dfbdb","quantity":12,"price":12},{"name":"wertyr","quantity":4 ,"price":20},{"name":"dfbdb","quantity":12,"price":12},{"name":"wertyr","quantity":4 ,"price":20},{"name":"dfbdb","quantity":12,"price":12},{"name":"wertyr","quantity":4 ,"price":20}]
  // }]
  }

  navigateToOrderSummary(event:any,element:any) {
    console.log(element);
    console.log(1234,element);
    var elementdata:any=[]
    element.items.map((x)=>{
      elementdata.push(x[0])
    })
    console.log(elementdata);
    this.router.navigateByUrl('/orderSummary',{state:{isPayment:false,data:elementdata,restaurantId:element.restaurantId}});
 }
}
