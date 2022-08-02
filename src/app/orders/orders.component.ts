import { Component, OnInit } from '@angular/core';
import { Customer } from '../customers.model';
import { CustomerService } from '../customers.service';
import { OrderModel } from '../order.model';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers:[OrderService]
})
export class OrdersComponent implements OnInit {

  constructor(private orderService:OrderService) { }


  localCustomersList:Customer[] = [];

  localOrdersList:OrderModel[] = [];

  ngOnInit(): void {


   let data:any = this.orderService.getOrdersWithCustomers();
   console.log(data);


    //CustomerService.customerslist()
   // i have created the instance and then calling the array
    // this.localCustomersList =  this.customerService.CustomersList;

    // this.localOrdersList =  this.orderService.OrdersList;
  }

  
  




}
