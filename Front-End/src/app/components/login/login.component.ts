import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';
import { UserinfoService } from 'src/app/services/userinfo.service';
import { Userinfo } from 'src/app/userinfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    username:'',
    password:''
  }
  userInfo: Userinfo[] | any;
  constructor(private loginService:LoginService,
    private userInfoserivce: UserinfoService,
    private router:Router) { }

  ngOnInit(): void {
    this.getUserInfo();
  }
  forgetpass(){
    this.router.navigate(['forgetpass']);
  }
  onSubmit(){
    console.log("form is submited");
    if((this.credentials.username!='' && this.credentials.password!='')&&(this.credentials.username!=null && this.credentials.password!=null))
    {
      console.log("we have to submit the form to server");
      for(let i=0; i<this.userInfo.length; i++){
        if(this.userInfo[i].username == this.credentials.username){
          //console.log("Username is  : ", this.userInfo[i].username);
         // console.log("Id is : ", this.userInfo[i].id);
          
          localStorage.setItem("user_name", this.credentials.username);
          localStorage.setItem("user_id", this.userInfo[i].id);
          localStorage.setItem("shop_name", this.userInfo[i].shopName)
        }
      }
      this.loginService.generateToken(this.credentials).subscribe(
        (Response:any)=>{
         // console.log(Response.token);
      
          this.loginService.loginUser(Response.token);
          console.log(this.credentials.username);
          
          window.alert("Logged in Successfully !! ", );
          window.location.href="/dashboard"
        // response=>{
        //     console.log(response);
            
        },
        error=>{
          alert("Your username and password was incorrect !! ")
          console.log(error);
          
        }
        
      )
    }else{
      console.log("Fields are empty !!");
      
    }
  }


  getUserInfo(){
    this.userInfoserivce.getUser().subscribe(data =>{
      this.userInfo = data;
     // console.log(data);
      
    })
  }
}
