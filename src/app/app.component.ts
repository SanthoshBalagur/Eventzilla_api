import { Component,Input } from '@angular/core';
import { EventService } from './event.service';
//import { HttpClient,HttpHeaders } from 'selenium-webdriver/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http/';
import { Event } from 'src/models/Event';
import { Observable } from 'rxjs';

let data;
let seventid="2138990184";
let  dateid="238982482";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  @Input()  datas ={ 
    "eventid":seventid,
    "eventdateid": dateid,
    "ticket_types": [
      {
        "ticket_typeid":2139012976,
        "quantity": 2
      }
    ]
   
  }

  constructor(private EventService: EventService, private http:HttpClient ){
    
   // this.data.printToConsole("Got the Service");
    
  }
  Events:any;
 pay: any;
 tickettype: any;
taxes: any;
response:any;


  ngOnInit() {
   
  this.EventService.getUsers().subscribe(Events => {
    this.Events = Events;
    this.pay = this.Events.payment_options;
    this.tickettype = this.Events.tickettypes;
    // this.taxes= this.Events.tax;
    console.log(this.Events);
    this.checkoutcreate();
  });



  }
  checkoutcreate(){
    this.EventService.checkoutcreate(this.datas).subscribe((response)=>{console.log(this.response)})
  }
  
  
}

