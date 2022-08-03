import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import {  OrderService } from './order.service'
import {  CustomerService } from './customers.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [OrderService , CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
