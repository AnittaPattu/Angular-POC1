import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'success',
  template: `<h1>Hello {{name}}</h1>
   <button (click)="success()">Success</button>`,
})
export class SuccessComponent
{
    name = 'Success';
    constructor(private router:Router)
    {
        // alert();
    }
    success()
    {
        this.router.navigate(['']);
    }
}