import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/classes/category';
import { Product } from 'src/app/classes/product';
import { LoginService } from 'src/app/services/login.service';
import { ProductService } from 'src/app/services/product.service';
import { UserinfoService } from 'src/app/services/userinfo.service';
import { Userinfo } from 'src/app/userinfo';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
}) 
export class ProductlistComponent implements OnInit {

  products: Product[] = [];
  prod: Product[] = [];
  cat: Category[] = [];
  userInfos : Userinfo[] | any;
  constructor(private productService: ProductService,
    private router: Router,
    private loginService: LoginService,
    private userInfoService: UserinfoService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getUser();
  }
 
 
  private getProducts(){
    this.productService.getProductList().subscribe(data =>{
      this.products = data;
    //  console.log(data);
    //  console.log("products length: ",this.products.length);
      
      
    })
  }

  updateProduct(id: number | undefined)
  {
    this.router.navigate(['updateproduct',id]);
  }

  deleteProduct(id: number | undefined){
    this.productService.deleteProduct(id).subscribe(data =>{
     // console.log(data);
      this.getProducts();
      location.reload();
    })
  }

  private getUser(){
    this.userInfoService.getUser().subscribe(data => {
      this.userInfos = data;
     // console.log(data);
     // console.log(this.userInfos.length);
      
      for(let i =0; i<this.userInfos.length ; i++){
        let idd = localStorage.getItem("user_id");
        if(this.userInfos[i].id == idd){
         // console.log(this.userInfos[i].categorys);
          this.cat = this.userInfos[i].categorys;
          // for(let j=0; j<this.userInfos[i].categorys.length; j++){
          //   this.prod.push(this.userInfos[i].category[j].products);
          // }
        //  console.log("cat : ", this.cat);
          
          for(let j=0; j<this.cat.length; j++){
           
            //this.prod.push(this.cat[j].pro)
           
            for(let p=0; p<this.products.length; p++){
              if(this.cat[j].categoryId == this.products[p].categoryId)
                this.prod.push(this.products[p]);
            }
          }
        }
      } 

     // console.log("products : ",this.prod);
      
    })
  }

}
