import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class BookingService
{
    movies=["Virumaandi","Pragamiyam","Bogan","Muthuramalingam","Arasakulam"];
    constructor(private http:Http)
    {

    }
    getPosts()
	{
		return this.http.get('../app/data.json').map(res=>res.json());
	}
    getMovies()
    {
        console.log(this.movies);
        return this.movies;
    }
}