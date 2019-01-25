import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http/';
import { Event } from 'src/models/Event';
import { Observable } from 'rxjs';


let mytoken = "565e95b08ad5210001000001b0db86dc97f6477c781493729c6cbcfb";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': mytoken
  })
}


@Injectable({
  providedIn: 'root'
})


export class EventService {
  printToConsole(arg){
    console.log(arg);
  }
  public api_url:string = "http://publicapi.eventxpress.net/v2/api/checkout/prepare/2138990184/2138982482";
  
  constructor(private http: HttpClient) { };
   
  getUsers():Observable<Event[]>
  {
    return this.http.get<Event[]>(`${this.api_url}`,httpOptions);
  }

  }

