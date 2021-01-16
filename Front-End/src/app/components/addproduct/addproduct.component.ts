import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/classes/category';
import { Product } from 'src/app/classes/product';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  product: Product = new  Product();

  category: Category = new Category();
  categorys: Category[] | undefined;

  constructor(private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.getCategorys();
  }
  logout(){
    
    this.loginService.logout();
    this.router.navigate(['login']);
  }
  private getCategorys(){
    this.categoryService.getAllCategory().subscribe(data =>{
      this.categorys = data;
      console.log(data);
      
    });
  }
  saveProduct(){
   // this.product.categoryId = 1;
    this.productService.createProduct(this.product).subscribe(data => {
      console.log(data);
      window.alert("Product Added successfully !!");
      this.router.navigate(['productlist']);
    },
    error => console.log(error));
  }
  goToProductList(){
    this.router.navigate(['/productlist']);
  }

  onSubmit(){
    console.log(this.product);
    this.saveProduct();
    
  }
}
