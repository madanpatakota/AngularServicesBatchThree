import { Injectable } from "@angular/core";
import { Customer } from "./customers.model";




@Injectable()
export class CustomerService{

  //name:string = "Madan";    //recommanded


  CustomersList : Customer[]= [
    {
      CustomerID: 'ANATR',
      ContactName: 'Ana Trujillo',
      City: 'México D.F.',
      Phone: '(5) 555-4729',
    },
    {
      CustomerID: 'HANAR',
      ContactName: 'Mario Pontes',
      City: 'Rio de Janeiro',
      Phone: '(21) 555-0091',
    },
    {
      CustomerID: 'VINET',
      ContactName: 'Paul Henriot',
      City: 'Reims',
      Phone: '26.47.15.10',
    },
  ];


}

