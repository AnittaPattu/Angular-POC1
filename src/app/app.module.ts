import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';

import { routing } from './app.route';
import { AppComponent }  from './app.component';
import { Service } from './app.service';
import { BookingService } from './ticketBooking/booking.service';
import { SignupComponent } from './signup/signup.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingComponent } from './ticketBooking/booking.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  imports:      [ BrowserModule,RouterModule,routing,ReactiveFormsModule,HttpModule],
  declarations: [ AppComponent,SignupComponent,MenuComponent,
  LoginComponent,PaymentComponent,BookingComponent,SuccessComponent],
  bootstrap:    [ AppComponent ],
  providers:[Service,BookingService]
})
export class AppModule { }
