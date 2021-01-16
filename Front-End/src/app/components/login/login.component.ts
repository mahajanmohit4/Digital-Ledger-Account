import { Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/services/login.service';

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
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("form is submited");
    if((this.credentials.username!='' && this.credentials.password!='')&&(this.credentials.username!=null && this.credentials.password!=null))
    {
      console.log("we have to submit the form to server");
      
      this.loginService.generateToken(this.credentials).subscribe(
        (Response:any)=>{
          console.log(Response.token);
      
          this.loginService.loginUser(Response.token);
          window.alert("Logged in Successfully !!");
          window.location.href="/dashboard"
        // response=>{
        //     console.log(response);
            
        },
        error=>{
          console.log(error);
          
        }
        
      )
    }else{
      console.log("Fields are empty !!");
      
    }
  }
}
