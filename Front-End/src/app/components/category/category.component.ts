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
  categorys: Category[] | any;

  cat: Category[] = [];

 
  userInfos : Userinfo[] | any;
  constructor(private categoryService: CategoryService,
    private route: Router,
    private loginService: LoginService,
    private userInfoService: UserinfoService
    ) { }
  
  ngOnInit(): void {
    this.getCategorys();
    
  }
  

  private getCategorys(){
    this.categoryService.getAllCategory().subscribe(data =>{
      this.categorys = data;
      // console.log(data);
      // console.log(this.categorys.length);
      
    });
  }
  
  saveCategory(){
    let idd = localStorage.getItem("user_id");
    this.category.id = Number(idd);
  
    this.categoryService.createCategory(this.category).subscribe(data => {
      //console.log(data);
      window.alert("Category Added Sucessfully");
      location.reload();
      this.ngOnInit()
      this.getCategorys();
    },
    error => console.log(error));
    
    
  }
 
  onSubmit(){
   // console.log(this.category);
    this.saveCategory();
  }


}
 