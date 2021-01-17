import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/classes/cart';

import { Product } from 'src/app/classes/product';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {

  products: Product[] | any;
  product: Product = new Product();
  public id: number | any;
  public updatedProductQuantity: number | any;
  public acptQunatity: number = 1;

  public resetQty:number | any;



  cart: Cart = new Cart();


  constructor(private productService: ProductService,
    private router: Router,
    private loginService: LoginService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    
    this.resetQty = 1;
    this.getProducts();
  }
  value1 = '';
  
  update1(value1: string) { 
    this.value1 = value1;  
    console.log(value1);
    this.acptQunatity = +value1;
    console.log("Actual value is : "+ this.acptQunatity);
    
    
    
  }
  onSbt(event: any) {
    console.log(event.target.player.value);
    
    return event.target.player.value;
 }

  
 addToSellCart(pid: number){
  console.log("product id is : " + pid);
  this.id = pid;
  var todayDate = new Date().toISOString().slice(0,10);
  
  for (var i = 0; i < this.products.length; i++) {
    // console.log(this.products[i]);
    if (this.products[i].productId == pid) {
      this.product = this.products[i];
      
      
      this.cart.cartDate = todayDate;
      this.cart.itemsQuantity = this.acptQunatity;
      this.cart.id =1;
      this.cart.productId = pid;
      this.cart.discount = 0;
      this.cart.totalAmount = this.products[i].productSellingPrice *  this.acptQunatity;
     this.saveToCart();
      window.alert("Added Succesfully !!");
    }
  }
  console.log("selected product is : " + this.product.productName + " " + this.product.productQuantity);

 }

  private getProducts() {
    this.productService.getProductList().subscribe(data => {
      this.products = data;
      console.log(data);

    })
  }

  sellProduct(pid: number) {
    console.log("product id is : " + pid);
    this.id = pid;
    var todayDate = new Date().toISOString().slice(0,10);
    
    for (var i = 0; i < this.products.length; i++) {
      // console.log(this.products[i]);
      if (this.products[i].productId == pid) {
        this.product = this.products[i];
        this.updateProduct();
        
        this.cart.cartDate = todayDate;
        this.cart.itemsQuantity = this.acptQunatity;
        this.cart.id =7;
        this.cart.productId = pid;
        this.cart.discount = 0;
        this.cart.totalAmount = this.products[i].productSellingPrice *  this.acptQunatity;
       
        window.alert("sold !!!");
      }
    }
    console.log("selected product is : " + this.product.productName + " " + this.product.productQuantity);

  }


  updateProduct() {
    this.updatedProductQuantity = this.product.productQuantity;
    this.product.productQuantity = this.updatedProductQuantity - this.acptQunatity;
    if(this.product.productQuantity > 0 ){
      this.productService.updateProduct(this.id, this.product).subscribe(data => {

        console.log(data);
        this.ngOnInit();
      },
        error => console.log(error));
    }
    else{
      window.alert("Product is not available")
    }
   
  }

  saveToCart(){
    this.cartService.createCart(this.cart).subscribe(data => {
      console.log(data);
      
    }, error => console.log(error))
  }

}
