import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

    billAmount:number = 0;

  constructor(private  route:ActivatedRoute){

      route.params.subscribe( 
        (inputs)=>{  this.billAmount = inputs['amount']} 
        );

  }






}
