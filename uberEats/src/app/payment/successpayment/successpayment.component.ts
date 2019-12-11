import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-successpayment',
  templateUrl: './successpayment.component.html',
  styleUrls: ['./successpayment.component.scss']
})
export class SuccesspaymentComponent implements OnInit {
  @Input() orderId : any;
  constructor() { }

  ngOnInit() {
    this.orderId=1232345;
  }

}
