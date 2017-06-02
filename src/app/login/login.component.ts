import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormArray, FormBuilder, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'login',
//   template: `<h1>Hello {{name}}</h1>
//                <button (click)="login()">Login</button>`,
templateUrl:"./login.html"
})
export class LoginComponent implements OnInit
{
    name = 'This is Login Page';
    loginForm:FormGroup;
    constructor(private router:Router,private fb: FormBuilder)
    {
        // alert();
    }
   ngOnInit()
   {
        this.loginForm=this.fb.group({
			username:['',Validators.compose([Validators.required])],
	 		password : ['',Validators.compose([Validators.required])]
			})
   }
    login()
    {
        this.router.navigate(['booking']);
    }
}