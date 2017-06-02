import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
            <button (click)="signUp()">SignUp</button>`,
})
export class SignupComponent
{
    name = 'SignUp';
    constructor(private router:Router)
    {
        // alert();
    }
    signUp()
    {
        this.router.navigate(['login']);
    }
}