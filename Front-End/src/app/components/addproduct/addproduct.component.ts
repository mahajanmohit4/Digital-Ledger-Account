import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/classes/category';
import { Product } from 'src/app/classes/product';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { UserinfoService } from 'src/app/services/userinfo.service';
import { Userinfo } from 'src/app/userinfo';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  product: Product = new  Product();

  category: Category = new Category();
  categorys: Category[] | undefined;

  cat: Category[] = [];

  userInfos : Userinfo[] | any;


  constructor(private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private loginService: LoginService,
    private userInfoService: UserinfoService) { }

  ngOnInit(): void {
    this.getCategorys();
    this.getUser();
  }
 
  private getUser(){
    this.userInfoService.getUser().subscribe(data => {
      this.userInfos = data;
      //console.log(data);
      //console.log(this.userInfos.length);

      for(let i =0; i<this.userInfos.length ; i++){
        let idd = localStorage.getItem("user_id");
        if(this.userInfos[i].id == idd){
          console.log(this.userInfos[i].categorys);
          this.cat = this.userInfos[i].categorys;
        }
      } 
      
    })
  }
  private getCategorys(){
    this.categoryService.getAllCategory().subscribe(data =>{
      this.categorys = data;
     // console.log(data);
      
    });
  }
  saveProduct(){
   // this.product.categoryId = 9;
    this.productService.createProduct(this.product).subscribe(data => {
     // console.log(data);
      window.alert("Product Added successfully !!");
      location.reload();
    },
    error => console.log(error));
  }
  goToProductList(){
    this.router.navigate(['/productlist']);
  }

  onSubmit(){  

  //  console.log(this.product);
    this.saveProduct();
    
  }
  categoryIdUpdated(cid:number | any){
   
    //this.product.categoryId = cid;
  //  console.log("cid ",cid);
  //  console.log("heloosadfh");
    
  }
  selected:number = 0;
  public onOptionsSelected(event:any){
    
    const value = event.target.value;
    this.selected = value;
    this.product.categoryId = this.selected;
   // console.log(value, this.product.categoryId);
   // console.log(this.product);
    
  }
}



