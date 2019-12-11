import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {NavbarcompComponent} from '../../navbarcart/navbarcomp/navbarcomp.component';
// payment successful message display component and last of the line
@Component({
  selector: 'app-successpayment',
  templateUrl: './successpayment.component.html',
  styleUrls: ['./successpayment.component.scss']
})
export class SuccesspaymentComponent implements OnInit {
  private orderId : string;
  constructor(private router:Router) { 

    this.orderId=this.router.getCurrentNavigation().extras.state.data.orderId;
  }

  ngOnInit() {

    
    // console.log
  }

}
