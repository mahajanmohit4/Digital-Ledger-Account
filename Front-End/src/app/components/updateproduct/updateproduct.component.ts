import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/classes/category';
import { Product } from 'src/app/classes/product';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';
import { ProductService } from 'src/app/services/product.service';
import { UserinfoService } from 'src/app/services/userinfo.service';
import { Userinfo } from 'src/app/userinfo';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  id: number | undefined;
  product: Product = new Product();
 

  category: Category = new Category();
  categorys: Category[] | undefined;

  cat: Category[] = [];
  userInfos : Userinfo[] | any;
  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router,
    private loginService: LoginService,
    private userInfoService: UserinfoService) { }

  ngOnInit(): void {
    this.getCategorys();
    this.getUser();
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(data =>{
      console.log(data);
      this.product = data;
    }, 
      error => console.log(error)   
    );
  }
  
  private getCategorys(){
    this.categoryService.getAllCategory().subscribe(data =>{
      this.categorys = data;
      console.log(data);
       
    });
  }
  private getUser(){
    this.userInfoService.getUser().subscribe(data => {
      this.userInfos = data;
      console.log(data);
      console.log(this.userInfos.length);
      this.getCatByAID()
    })
  }
  getCatByAID(){
    for(let i =0; i<this.userInfos.length ; i++){
      let idd = localStorage.getItem("user_id");
      if(this.userInfos[i].id == idd){
        console.log(this.userInfos[i].categorys);
        this.cat = this.userInfos[i].categorys;
      }
    } 
  }
  onSubmit(){
    this.productService.updateProduct(this.id, this.product).subscribe( data =>{
      this.goToProductList();
      console.log(data);
      this.router.navigate(['addproduct'])
    },
    error => console.log(error)  );
  }

  goToProductList(){
    this.router.navigate(['/productlist']);
  }
  selected:number = 0;
  public onOptionsSelected(event:any){
    
    const value = event.target.value;
    this.selected = value;
    this.product.categoryId = this.selected;
    console.log(value, this.product.categoryId);
    console.log(this.product);
    
  }

}
