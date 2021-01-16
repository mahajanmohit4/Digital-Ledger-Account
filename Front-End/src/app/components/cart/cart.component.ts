
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cart } from 'src/app/classes/cart';
import { Cartitems } from 'src/app/classes/cartitems';
import { Product } from 'src/app/classes/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts: Cart[] | any;
  products: Product[] | any;
  cartitems1: Cartitems[] | any;
  
  cartitem: Cartitems[] = [];

  cart: Cart = new Cart();

  product: Product = new Product();
  constructor(private cartService: CartService,
    private router: Router,
    private productService: ProductService) { }

demoX : object[] | any;


public resetQty:number | any;


  ngOnInit(): void {
    this.resetQty = 1;
    this.getCarts();
    this.getProducts();
    // this.getAllCartData();
   // this.hello();
  }
  value1 = '';
  itmqty: number | any;
  update1(value1: string) { 
    this.value1 = value1;  
    this.itmqty = +value1;
    console.log("item qty : "+this.itmqty);
    console.log("type of final : "+typeof(this.itmqty));
    console.log(value1);     
    
  }
 
 // let productsZ: Product[] = [];
  private getCarts() {
    this.cartService.getCartList().subscribe(data => {
      this.carts = data;
      //console.log(this.carts);

    })
  }

  private getProducts() {
    this.productService.getProductList().subscribe(data => {
      this.products = data;
      this.demoX = data;
      // console.log(data);
     this.demo();
    // this.hello();
    })
  }
 

  demo(){
    this.hello()
    console.log(this.cartitem);
    console.log(this.cartitem.length);
    
    for(var i =0 ; i<this.cartitem.length; i++){
      console.log(this.cartitem[i].CID);
      
    }
  }
  hello() {
  
    console.log("Hello");
    console.log(this.carts);
    console.log(this.products); 
    console.log(this.products.length);
    
   // var x = JSON.parse(this.carts);
 //  console.log(this.cartitems1.length);
   
   for(var j =0; j<this.carts.length; j++){
      
      for(var i=0; i<this.products.length; i++){
        if(this.carts[j].productId == this.products[i].productId){
          this.cartitem.push(new Cartitems(this.carts[j].cartId, this.products[i].productId, this.products[i].productName, this.products[i].productDescription, this.products[i].productQuantity, this.products[i].productCostPrice, this.products[i].productSellingPrice))
          //console.log(this.carts[j].cartId);
          //console.log(this.products[i].productSellingPrice);  
                          
         
        }        
      }

    
     
   }
  
  
    
  }


  deleteProduct(id: number | undefined){
    this.cartService.deleteCart(id).subscribe(data =>{
      console.log(data);
      this.cartitem = [];
      this.ngOnInit()
      
    })
  }

  updateItemQuantity(id: number | undefined){
    console.log("item quantity updated !!");
    this.cart.cartId = id;
    this.cart.itemsQuantity = Number(this.itmqty);
    console.log("final qty "+this.cart.itemsQuantity);
    console.log("type of : "+typeof(this.itmqty));
    this.cart.discount = 11;
    this.cartService.updateCart(id, this.cart).subscribe( data =>{
      console.log(data);
      
    }, error => console.log(error))

  }
}
