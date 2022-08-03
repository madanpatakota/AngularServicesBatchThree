
import { OrderModel } from './order.model'

import { CustomerService } from './customers.service';
import { Injectable } from '@angular/core';
// use the customerservie

@Injectable()
export class OrderService {

    //i am injecting customerService......
    constructor(private CustomerService:CustomerService){

    }


  OrdersList : OrderModel[] = [
    {
      CustomerID: 'VINET',
      OrderID: '10248',
      OrderDate: '1996-07-16 00:00:00.000',
      ShipName: 'Vins et alcools Chevalier',
    },

    {
      CustomerID: 'HANAR',
      OrderID: '	10886',
      OrderDate: '	1998-03-02 00:00:00.000',
      ShipName: '	Hanari Carnes',
    },

    {
      CustomerID: 'ANATR',
      OrderID: '	10308',
      OrderDate: '	1996-09-24 00:00:00.000',
      ShipName: '	Ana Trujillo Emparedados y helados',
    },
  ];

  getOrdersWithCustomers(){

   let ordersList =  this.OrdersList;
   let customersList = this.CustomerService.CustomersList;

   //Tuple , spread , rest 
   return [ordersList , customersList];

  }
  


}
