import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl:"./menu.component.html",
  styleUrls:['./menu.style.css'],
})
export class MenuComponent
{
    name = 'Menu';
    hover=true;
    constructor()
    {
        // alert();
    }
    over()
    {
      this.hover=false;
    }
    overout()
    {
        this.hover=true;
    }
   
}