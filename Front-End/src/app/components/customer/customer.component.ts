
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/classes/cart';
import { Cartitems } from 'src/app/classes/cartitems';
import { Customer } from 'src/app/classes/customer';
import { Product } from 'src/app/classes/product';
import { CartService } from 'src/app/services/cart.service';
import { CustomerService } from 'src/app/services/customer.service';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  id: number | undefined;
  customer: Customer = new Customer();
  cartitems: Cartitems[] = [];
  cartitems1: Cartitems[] | any;
  carts:Cart[] | any;
  product: Product = new Product();
  constructor(private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private productService:ProductService
  ) { }

  totalamt: number = 0;
  isValidP: boolean = false;
  ngOnInit(): void {

    // this.isValidP= false;
   
    this.customer.reminderDate = new Date().toISOString().split('T')[0];

    this.totalamt = Number(sessionStorage.getItem("Total_Amount"));
   // console.log(this.totalamt);


    let cartI: string | any;
    cartI = sessionStorage.getItem("cartitem");

   // console.log(typeof (cartI), cartI);
    var cartItm = JSON.parse(cartI);
   // console.log(cartItm);
   this.updateProductQuntity();
   this.getCart();
  }

  getCart(){
    this.cartService.getCartList().subscribe( data => {
      this.carts = data;
      
     console.log(this.carts,"carts");
      for(let i=0; i<this.carts.length; i++){
         // this.deletCart(this.carts[i].cartId);
         
      }
    })
  }


  public qty:number | any;
  updateProductQuntity(){
    let cartI: string | any;
    cartI = sessionStorage.getItem("cartitem");

    var cartItm = JSON.parse(cartI);
    this.cartitems1 = cartItm;
    console.log(this.cartitems1);
    for(let i=0; i<= this.cartitems1.length; i++){
      console.log("======",this.cartitems1[i].CID);
      
      this.qty = this.cartitems1[i].PQuantity - this.cartitems1[i].IQuanitity;
      this.updateProductQ(this.qty, this.cartitems1[i].PID);
      this.cartService.deleteCart(this.cartitems1[i].CID).subscribe(data =>{
        // console.log(data);
        
       })
    }

  }
  updateProductQ(qty:number, pid:number){
    console.log("******************");
    
    if(qty > 0 ){
      this.product.productQuantity = qty;
      this.productService.updateProduct1(pid, this.product).subscribe(data => {

        console.log(data);
       // this.ngOnInit();
      },
        error => console.log(error));
    }
    else{
      window.alert("Product is not available")
    }

  }

  deletCart(id: number | any){
    this.cartService.deleteCart(id).subscribe(data =>{
     // console.log(data);
     
    })
  }


  saveCustomer() {

    let idd = Number(localStorage.getItem("user_id"));
    this.customer.id = idd;
    let todayDate = new Date().toISOString().slice(0,10);
    this.customer.purchaseDate = todayDate;
    this.customer.totalPrice = Number(sessionStorage.getItem("Total_Amount"));
    console.log("new custoemr ",this.customer)

    this.customerService.createCustomer(this.customer).subscribe(data => {
     // console.log(data);
     
      let c = JSON.stringify(data) 
      
      sessionStorage.setItem("customer_data",c);
      this.router.navigate(['bill'])
    }, error => console.log(error))

  } 

  onSubmit() {
   

    this.saveCustomer();
  }

  pstatus(ps: string) {
    console.log(ps);
    if (ps == "Unpaid") {
      this.isValidP = true;
    } else {
      this.isValidP = false;
    }

  }
} 
