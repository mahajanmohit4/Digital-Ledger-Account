
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
  Curruntcartitem: Cartitems[] = [];

  cart: Cart = new Cart();

  product: Product = new Product();
  constructor(private cartService: CartService,
    private router: Router,
    private productService: ProductService) { }

  demoX: object[] | any;


  public resetQty: number | any;


  ngOnInit(): void {
    this.resetQty = 1;
    this.getCarts();
    this.getProducts();
    // this.updateItemQuantity(1);
    // this.updateDiscount(1);
    // this.getAllCartData();
    // this.hello();
  }
  value1 = '';
  itmqty: number | any;
  update1(value1: string) {
    this.value1 = value1;
    this.itmqty = +value1;
    console.log("item qty : " + this.itmqty);
    console.log("type of final : " + typeof (this.itmqty));
    console.log(value1);

  }

  value2 = '';
  disct: number | any;
  update2(value2: string) {
    this.value1 = value2;
    this.disct = +value2;
   // console.log("item qty : " + this.disct);
   // console.log("type of final : " + typeof (this.disct));
   // console.log(value2);

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
     //  console.log(data);
      this.demo();
      // this.hello();
    })
  }


  demo() {
    this.hello()
    //console.log(this.cartitem);
    //console.log(this.cartitem.length);

    // for (let i = 0; i < this.cartitem.length; i++) {
    //   console.log(this.cartitem[i].CID);

    // }
  }
  hello() {

    //console.log("Hello");
   // console.log(this.carts);
    //console.log(this.products);
   // console.log(this.products.length);

    //console.log(this.cartitem,"old ");
    let idd = Number(localStorage.getItem("user_id")) ;
    for (let j = 0; j < this.carts.length; j++) {

      for (let i = 0; i < this.products.length; i++) {
        if (this.carts[j].productId == this.products[i].productId) {
          this.cartitem.push(new Cartitems(this.carts[j].cartId, this.products[i].productId, this.products[i].productName, this.products[i].productDescription, this.products[i].productQuantity, this.products[i].productCostPrice, this.products[i].productSellingPrice, this.carts[j].itemsQuantity, this.carts[j].discount, idd))
                        
        }
      }

    }

    //console.log(this.cartitem, "new ");
    
    for(let c=0; c<this.cartitem.length; c++){
      if(this.cartitem[c].ID === idd){
        this.Curruntcartitem.push(this.cartitem[c]);
      }
    }
    //this.cartitem = this.Curruntcartitem;
//console.log("cuurent ;", this.Curruntcartitem, "id  : ",idd);



  }


  deleteProduct(id: number | undefined) {
    this.cartService.deleteCart(id).subscribe(data => {
    //  console.log(data);
      this.cartitem = [];
      this.Curruntcartitem = [];
      this.ngOnInit()

    })
  }

  updateItemQuantity(id: number | undefined) {
   // console.log("item quantity updated !!");
    this.cart.cartId = id;
    this.cart.itemsQuantity = Number(this.itmqty);
   // console.log("final qty " + this.cart.itemsQuantity);
   // console.log("type of : " + typeof (this.itmqty));
    //this.cart.discount = 11;
    this.cartService.updateCart(id, this.cart).subscribe(data => {
      console.log(data);

    }, error => console.log(error));

    // this.cartitem = [];
    // this.hello();

    this.Curruntcartitem = [];
    for (let i = 0; i < this.cartitem.length; i++) {
      
      if(this.cartitem[i].CID == id){
        this.cartitem[i].IQuanitity = this.itmqty;
      }
    }

    //this.hellodemo()
  }

  
  updateDiscount(id: number | undefined) {
   
    //console.log("item discount updated !!");
    this.cart.cartId = id;
    //console.log("type of : " + typeof (this.disct));
   
    this.cart.discount = Number(this.disct);

   
    const promiseA = new Promise( (rosolve,reject) => {
      
      this.cartService.updateDiscount(id, this.cart).subscribe(data => {
        //console.log(data);
        rosolve(data);
      }, error => console.log(error))
    });
    
    promiseA.then( data => {
     // console.log(data);
      
    })
    console.log("final qty " + this.cart.discount);
  
    // this.cartitem = [];
    // this.hello();

    for (let i = 0; i < this.cartitem.length; i++) {
      
      if(this.cartitem[i].CID == id){
        this.cartitem[i].Disount = this.disct;
      }
    }

    //  this.hellodemo()
  }

  hellodemo() {
    this.totalAmounts()
  }


  totals(Discount: number | any, SPrice: number | any, Qtys: number | any) {
    let totalprice = SPrice * Qtys;

    if (Discount == 0) {
      return SPrice * Qtys;
    }
    else {
      let d = totalprice * (Discount / 100);
      let totalamount = totalprice - d;
      //console.log(totalprice);
      //console.log(d);

      //console.log(totalamount);
      return totalamount;
    }



  } 


  totalAmt: number | undefined;
  totalAmounts() {
  
    this.totalAmt = 0;
    // for(let t =0; t<this.carts.length; t++){
    //   this.totalAmt= this.totalAmt+this.carts[t].itemsQuantity;
    // }

   // console.log("Total Amount is : " , this.totalAmt);
    //console.log(this.cartitem);

    // let dis = this.dicountCatculator(100,10,11);
    // console.log(typeof(dis));
    
    let iqty;
    let pprice;
    let dist;
    // debugger;
    for (let i = 0; i < this.cartitem.length; i++) {
      // console.log(this.cartitem[i].CID);
      iqty = this.cartitem[i].IQuanitity;
      pprice = this.cartitem[i].PSP;
      dist = this.cartitem[i].Disount;
      this.totalAmt += this.totals(dist, pprice, iqty);
    }


    sessionStorage.setItem("Total_Amount",String(this.totalAmt));
    sessionStorage.setItem("cartitem", JSON.stringify(this.cartitem));
    //console.log(this.totalAmt);


  }

  sendToCustomer(){
    this.totalAmounts();
    this.router.navigate(['customer']);
  }
} 
