import { Component } from '@angular/core';
import { EventService } from './event.service';
//import { HttpClient,HttpHeaders } from 'selenium-webdriver/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http/'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private eve: EventService, private http:HttpClient ){
    
    this.eve.printToConsole("Got the Service");
  }
  ngOnInit() {
    let mytoken = "565e95b08ad5210001000001b0db86dc97f6477c781493729c6cbcfb";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-api-key': mytoken
      })
    };
   let obs = this.http.get("http://publicapi.eventxpress.net/v2/api/checkout/prepare/2138990184/2138982482",httpOptions);

  obs.subscribe((res)=>console.log(res));
    
  }
}

