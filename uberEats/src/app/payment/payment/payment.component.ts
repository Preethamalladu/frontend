import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavbarcompComponent} from '../../navbarcart/navbarcomp/navbarcomp.component'
import {PaymentserviceService} from '../../paymentservice.service'
import {OrderHistoryService} from '../../order-history.service'
// payment component to save the order and payment objects
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  private cardnumber:string;
  private postal:string;
  private cvv:string;
  private expirydate:string;
  private userId:string;
  private restaurantId:string;
  // private orderdata:any;
  private totalCost:number;
  private items:any=[];
  
  constructor(private router: Router,private paymentservice:PaymentserviceService,private orderservice:OrderHistoryService) { 
    console.log(666,this.router.getCurrentNavigation().extras);
    this.restaurantId=this.router.getCurrentNavigation().extras.state.restaurantId;
    this.totalCost=this.router.getCurrentNavigation().extras.state.totalCost;
    this.items=this.router.getCurrentNavigation().extras.state.data;
    
    
  }

  ngOnInit() {
  
    this.cardnumber="";
    this.postal="";
    this.cvv="";
    this.expirydate="";
    this.userId=sessionStorage.getItem("userId");
    console.log(this.userId);

  }
  successPayment(element:any,formvalues:Array<String>){

    var newpaymentId:any;
    try{
      console.log(23562374)
      
      // sessionStorage.setItem("userId","5df055d63dc6122b40a3425b")
      this.userId=JSON.parse(localStorage.getItem("data"))["_id"]
        var  paymentObj=this.paymentservice.createPayment(
{
  "type": "credit card",
    "cardNumber": formvalues[0],
    "validThr": formvalues[1],
    "cvv": formvalues[2],
    "userId": this.userId,
    "isDefault": true
}
        ).subscribe((data)=>{newpaymentId=data["_id"];
      });
      // newpaymentId=new;   
      var ordercart:any=[]
      console.log(this.items);
      for(let i of this.items){
        i = i[0];
      }
      console.log(this.items,'sdfs');
      // this.items.map((x)=>{ordercart.push(x[0])})
      // console.log(9090);
      console.log(this.items[0]["restauantId"]);
      
      var orderdata:any;
      var orderObj= this.orderservice.createorder({

      "items": this.items,
        "discount":0,
        "userId":this.userId,
        "restaurantId": this.items[0]["restauantId"],
        "totalCost":this.totalCost ,
        "status": "booked",
        "paymentId":newpaymentId,
        "DeliveredBy":"uber eats delivery",
        "description":""
    })
    .subscribe((data)=>{
        orderdata=data;
        this.router.navigateByUrl('/success',{state:{data:{"orderId":orderdata._id}}});
      })
        
        
    }
    catch(e){
      console.log(e);
      console.log("Error occured while booking an order. Please Try later after some time")
    }




  }

}
