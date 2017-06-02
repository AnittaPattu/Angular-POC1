import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from './booking.service';
@Component({
  selector: 'booking',
  templateUrl: './booking.html',
})
export class BookingComponent implements OnInit
{
    public name = 'booking';
    public data:any=[];
    public hide:boolean;
    bookingForm:FormGroup;
    public movies:any=[];
    public filteredList:any=[];
     public query = '';
     public uniqueFrom:any=[];
     public moviedesc:any={};
    constructor(private router:Router,private bookingservice:BookingService,private fb:FormBuilder)
    {
        // alert();
    }
    ngOnInit()
    {
        this.hide=true;//hiding the description div
         this.bookingForm = this.fb.group({
             moviefilter: ['', [Validators.required]]
         });
         //getting objects from JSON
        this.bookingservice.getPosts().subscribe(posts=>{
            this.data=posts;
            console.log(posts.length);
            for(let i=0;i<posts.length;i++)
            {
                this.movies[i]=Object.keys(posts[i])[0];   
                        // console.log(Object.keys(posts[i])[0]);        
            }
                // console.log(this.movies);
        
        })
        // console.log(this.uniqueFrom);
        //getting unique movie name
        // this.movies=this.bookingservice.getMovies();
        //  this.uniqueFrom = this.movies.filter(function(elem:any, index:any, self:any)
        //   {
        //       console.log(index == self.indexOf(elem));
        //          return index == self.indexOf(elem);
        //  })
    }
//suggestion list
    filter() {
            this.query=this.bookingForm.value.moviefilter;
        if (this.query != ""){
            console.log(this.query);
            this.filteredList = this.movies.filter(function(el:any){
                // console.log(el.toLowerCase().indexOf(this.query.toLowerCase()) > -1);
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));  
        }
        else{
            this.filteredList = [];
        }
    }

    //selecting exact movie in suggestion list
    select(movieSelected:any)
    {
        let x;
        this.query = movieSelected;
        this.bookingForm.controls['moviefilter'].setValue(this.query);
        this.filteredList = [];
        this.hide=true;
        //finding the index of selected value from original array
       let persons=this.movies.indexOf(movieSelected);     
       this.moviedesc=Object.values(this.data[persons])[0];
         console.log(this.moviedesc.theatre);
    }

//booking the movie
    booking()
    {
        console.log(this.movies);
        this.router.navigate(['payment']);
    }
    filter2()
    {
        this.hide=false;
    }
}