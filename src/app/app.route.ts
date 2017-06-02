import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HttpModule   }  from '@angular/http';
import { SignupComponent } from './signup/signup.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingComponent } from './ticketBooking/booking.component';
import { SuccessComponent } from './success/success.component';

const appRoutes: Routes = [
  { path: '', component:MenuComponent },
  { path: 'menu', component:MenuComponent },
  { path:'signup', component: SignupComponent },
  { path:'login', component:  LoginComponent },
  { path:'payment', component: PaymentComponent },
  { path:'booking', component: BookingComponent }, 
  { path:'success', component: SuccessComponent }, 
];
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);