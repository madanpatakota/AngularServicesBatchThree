
export class CustomerService{

     getCustomers(){

       let Customers = [
            {
              ID: 1,
              name: 'Customer-A',
            },
            {
              ID: 2,
              name: 'Customer-B',
            },
          ];

        return Customers;


     }



     getCustomersByID(ID:number){


        let Customers = [
            {
              ID: 1,
              name: 'Customer-A',
            },
            {
              ID: 2,
              name: 'Customer-B',
            },
          ];



        let filterCustoems  =  Customers.filter((item)=>item.ID == 1);
        return filterCustoems;

           ///Logic is here
     }




}

