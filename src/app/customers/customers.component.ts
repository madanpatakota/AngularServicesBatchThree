import { Component, OnInit } from '@angular/core';
import { Customer } from '../customers.model';

import { CustomerService } from '../customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers:[CustomerService]
})
export class CustomersComponent implements OnInit {
  constructor(private customProvider:CustomerService) {}

  CustomersList:Customer[] = [];
  //whenever my component is loading
  //.....what you have to do
  ngOnInit(): void {

    //let cSerivce  = new  CustomerService();
    // i am creating the cService 
    // and then callinig the customersList array
    this.CustomersList = this.customProvider.CustomersList;


  }

  
 




}
