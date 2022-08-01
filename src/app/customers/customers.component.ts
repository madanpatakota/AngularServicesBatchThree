import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  constructor() {}

  lCustomersList:any = [];


  //whenever my component is loading
  //.....what you have to do
  ngOnInit(): void {

    let cSerivce  = new  CustomerService();

    this.lCustomersList = cSerivce.getCustomers(); 


  }


  GetCustomersByID(){
    let cSerivce  = new  CustomerService();

    this.lCustomersList = cSerivce.getCustomersByID(1); 

    console.log(this.lCustomersList);

  }
  
 




}
