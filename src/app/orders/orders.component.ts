import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customers.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor() { }


  localCustomersList:any = [];

  ngOnInit(): void {


    var cSerivce = new CustomerService();
     this.localCustomersList = 
     cSerivce.getCustomers();


  }




  
  




}
