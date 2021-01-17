
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cartitems } from 'src/app/classes/cartitems';
import { Customer } from 'src/app/classes/customer';
import { CustomerService } from 'src/app/services/customer.service';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  id: number | undefined;
  customer: Customer = new Customer();
  cartitems: Cartitems[] = [];

  constructor(private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router,
   ) { }

    totalamt:number = 0;
   
  ngOnInit(): void {
     this.totalamt =Number(sessionStorage.getItem("Total_Amount")) ;
    console.log(this.totalamt);
  
    
    let cartI:string | any;
    cartI = sessionStorage.getItem("cartitem");
  
    console.log(typeof(cartI), cartI);
    var cartItm =  JSON.parse(cartI);
    console.log(cartItm);

    
  }

  saveCustomer(){
    this.customerService.createCustomer(this.customer).subscribe( data => {
      console.log(data);
      
    }, error => console.log(error))

  }

onSubmit(){

}
} 
