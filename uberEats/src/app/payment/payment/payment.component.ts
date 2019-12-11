import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
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
  constructor(private router: Router) { }

  ngOnInit() {
    this.cardnumber="";
    this.postal="";
    this.cvv="";
    this.expirydate="";

  }
  success(element:any){
    console.log(12);
    this.router.navigateByUrl('/success');

  }

}
