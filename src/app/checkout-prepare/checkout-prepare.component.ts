import { Component, OnInit } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http/'

@Component({
  selector: 'app-checkout-prepare',
  templateUrl: './checkout-prepare.component.html',
  styleUrls: ['./checkout-prepare.component.css']
})
export class CheckoutPrepareComponent implements OnInit {
 
  constructor(private http :HttpClient) { }

  ngOnInit() {
   
    };
    
   
    
  }


