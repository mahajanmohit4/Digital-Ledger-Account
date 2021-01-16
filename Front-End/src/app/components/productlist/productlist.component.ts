import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/classes/product';
import { LoginService } from 'src/app/services/login.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products: Product[] | undefined;

  constructor(private productService: ProductService,
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  logout(){
    
    this.loginService.logout();
    this.router.navigate(['login']);
  }
  private getProducts(){
    this.productService.getProductList().subscribe(data =>{
      this.products = data;
      console.log(data);
      
    })
  }

  updateProduct(id: number | undefined)
  {
    this.router.navigate(['updateproduct',id]);
  }

  deleteProduct(id: number | undefined){
    this.productService.deleteProduct(id).subscribe(data =>{
      console.log(data);
      this.getProducts();
      
    })
  }

}
