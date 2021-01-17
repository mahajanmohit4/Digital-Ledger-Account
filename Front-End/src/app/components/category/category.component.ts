import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/classes/category';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';
import { UserinfoService } from 'src/app/services/userinfo.service';
import { Userinfo } from 'src/app/userinfo';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: Category = new Category();
  categorys: Category[] | undefined;
  userInfos : Userinfo[] | any;
  constructor(private categoryService: CategoryService,
    private route: Router,
    private loginService: LoginService,
    private userInfoService: UserinfoService
    ) { }
  
  ngOnInit(): void {
    this.getCategorys();
    this.getUser();
  }
  logout(){
    
    this.loginService.logout();
    this.route.navigate(['login']);
  }
  private getUser(){
    this.userInfoService.getUser().subscribe(data => {
      this.userInfos = data;
      console.log(data);
      
    })
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
