import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements OnInit {

  constructor(private userService:UserService,
    private loginService:LoginService,
    private router: Router) { }

    shopname: string | any;
  ngOnInit(): void {
    this.shopname = localStorage.getItem("shop_name")
  }
  viewProducts(){
    this.router.navigate(['productdetails'])
  }
  addCategorys(){
    this.router.navigate(['category']);
  }

  addProducts(){
    this.router.navigate(['addproduct']);
  }
  
  getUser(){
      this.userService.getUser().subscribe(
        user=>{
         // console.log(user);
          
        },
        error=>{
          console.log(error);
        }
          
          
       
      )
  }
}
