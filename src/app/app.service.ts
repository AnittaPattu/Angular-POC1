import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class Service
{
    movies=["Virumaandi","Pragamiyam","Bogan","Muthuramalingam","Arasakulam"];
    getMovies()
    {
        console.log(this.movies);
    }
}