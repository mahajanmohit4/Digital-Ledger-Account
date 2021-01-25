import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/classes/category';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';
import { UserinfoService } from 'src/app/services/userinfo.service';
import { Userinfo } from 'src/app/userinfo';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {

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
    this.getUser();
  }

  private getUser(){
    this.userInfoService.getUser().subscribe(data => {
      this.userInfos = data;
     // console.log(data);
     // console.log(this.userInfos.length);
      this.getCatByAID()
    })
  }
  private getCategorys(){
    this.categoryService.getAllCategory().subscribe(data =>{
      this.categorys = data;
     // console.log(data);
     // console.log(this.categorys.length);
      
    });
  }

  deleteCategory(id: number | undefined){
    this.categoryService.deleteCategory(id).subscribe( data => {
    //  console.log(data);
      this.ngOnInit();
      this.getCategorys();      
    });
  }
  updateCategory(id: number | undefined){
    this.route.navigate(['updatecategory', id]);
   // console.log("update is left");
    
  }
  
  getCatByAID(){   

    for(let i =0; i<this.userInfos.length ; i++){
      let idd = localStorage.getItem("user_id");
      if(this.userInfos[i].id == idd){
      //  console.log(this.userInfos[i].categorys);
        this.cat = this.userInfos[i].categorys;
      }
    } 
  }
 
}
