import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/classes/category';
import { Product } from 'src/app/classes/product';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';
import { ProductService } from 'src/app/services/product.service';

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
  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.getCategorys();
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(data =>{
      console.log(data);
      this.product = data;
    }, 
      error => console.log(error)   
    );
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

  onSubmit(){
    this.productService.updateProduct(this.id, this.product).subscribe( data =>{
      this.goToProductList();
      console.log(data);
      
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
