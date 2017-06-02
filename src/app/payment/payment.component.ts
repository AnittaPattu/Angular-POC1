import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'payment',
  template: `<h1>Hello {{name}}</h1>
   <button (click)="payment()">Payment</button>`,
})
export class PaymentComponent
{
    name = 'Payment';
    private movieName:any=[];
    constructor(private router:Router)
    {
        // alert();
    }
  
    payment()
    {
        this.router.navigate(['success']);
    }
}