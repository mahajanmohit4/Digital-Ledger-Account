import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cartitems } from 'src/app/classes/cartitems';
import { Customer } from 'src/app/classes/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  id:number | undefined;
  customer: Customer = new Customer();
  totalPrice: number | any;
  cartItem: Cartitems[] = []
  constructor( private route: ActivatedRoute,
    private customerService: CustomerService
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.customer = new Customer();
    // this.customerService.getCustomerById(this.id).subscribe( data => {
    //   this.customer = data;
    //  // console.log(data);
      
    // })

    let cust: string | any
    cust = sessionStorage.getItem("customer_data");
    let custData = JSON.parse(cust)

    this.customer = custData;


    
    let cartItems: object | any
    cartItems = sessionStorage.getItem("cartitem");
    let x = JSON.parse(cartItems);
   // console.log(cartItems);

   // console.log(x);
    
    this.cartItem = x;

    this.totalPrice = sessionStorage.getItem("Total_Amount");
    
    
    //console.log("cart ", this.cartItem[0].CID );
    //this.cartItem[0];
    
  }

  sendBillToEmail(cid:number | any){
   // console.warn(this.customer);
    alert("Invoice is sended successfully !!")
    sessionStorage.removeItem("cartitem")
    this.customerService.sendBill(this.customer).subscribe(data => {
     // console.log(data);
      alert("Invoice is sended successfully !!")
    })
  }
}
