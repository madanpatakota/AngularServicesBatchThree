import { Component, OnInit } from '@angular/core';
import { Customer } from '../customers.model';
import { CustomerService } from '../customers.service';
import { OrderModel } from '../order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [],
})
export class OrdersComponent implements OnInit {
  constructor(private orderService: OrderService) {}

  localCustomersList: Customer[] = [];

  localOrdersList: OrderModel[] = [];

  customerOrderDetails:any = [];

  ngOnInit(): void {
    let data: any = this.orderService.getOrdersWithCustomers();
    console.log(data);

    let ordersArray: OrderModel[] = data[0];
    let customesArray: Customer[] = data[1];

    let output: Customer;
    ordersArray.forEach((order: OrderModel) => {
      //console.log(order)
      output = customesArray.find(
        (customer) => customer.CustomerID == order.CustomerID
      );
      let PreparedObject = {
        City: output.City,
        CustomerID: output.CustomerID,
        ContactName: output.ContactName,
        Phone: output.Phone,
        OrderDate: order.OrderDate,
        OrderID: order.OrderID,
        ShipName: order.ShipName,
      };
      this.customerOrderDetails.push(PreparedObject);
    });

    console.log(this.customerOrderDetails);

    //CustomerService.customerslist()
    // i have created the instance and then calling the array
    // this.localCustomersList =  this.customerService.CustomersList;

    // this.localOrdersList =  this.orderService.OrdersList;
  }
}
