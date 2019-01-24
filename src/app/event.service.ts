import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  printToConsole(arg){
    console.log(arg);
  }
  constructor() { }
}
