import { Component, OnInit } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http/'

@Component({
  selector: 'app-checkout-prepare',
  templateUrl: './checkout-prepare.component.html',
  styleUrls: ['./checkout-prepare.component.css']
})
export class CheckoutPrepareComponent implements OnInit {
  userName:string = " ";
  res: any;
  constructor(private http :HttpClient) { }

  ngOnInit() {
   
    };
    search(){
      let obs = this.http.get("http://publicapi.eventxpress.net/v2/api/checkout/prepare/2138990184/2138982482" + this.userName);

      obs.subscribe((res)=>{
        this.res= res;
        console.log(res);
      })
      
    }
   
    
  }


