import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/classes/category';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: Category = new Category();
  categorys: Category[] | undefined;

  constructor(private categoryService: CategoryService,
    private route: Router,
    private loginService: LoginService) { }
  
  ngOnInit(): void {
    this.getCategorys();
  }
  logout(){
    
    this.loginService.logout();
    this.route.navigate(['login']);
  }
  private getCategorys(){
    this.categoryService.getAllCategory().subscribe(data =>{
      this.categorys = data;
      console.log(data);
      
    });
  }
  
  saveCategory(){
    this.category.id = 1;
    this.categoryService.createCategory(this.category).subscribe(data => {
      console.log(data);
      window.alert("Category Added Sucessfully");
      this.getCategorys();
    },
    error => console.log(error));
    
    
  }
  deleteCategory(id: number | undefined){
    this.categoryService.deleteCategory(id).subscribe( data => {
      console.log(data);
      this.getCategorys();      
    });
  }
  updateCategory(id: number | undefined){
    this.route.navigate(['updatecategory', id]);
    console.log("update is left");
    
  }
  onSubmit(){
    console.log(this.category);
    this.saveCategory();
  }
}
