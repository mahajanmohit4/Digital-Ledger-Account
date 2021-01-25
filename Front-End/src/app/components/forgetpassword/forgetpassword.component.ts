import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { UserinfoService } from 'src/app/services/userinfo.service';
import { Userinfo } from 'src/app/userinfo';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  userInfo: Userinfo = new Userinfo();
  users: Userinfo[] = [];
  
  constructor(private userinfoService: UserinfoService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  gotologin(){
    this.router.navigate(['login']);
  }
  private getUsers(){
    this.userinfoService.getUser().subscribe( data => {
      //console.log(data);
      this.users = data;
      //console.warn(this.users, "users");
    })
  }

  onSubmit(){
    this.userInfo.password="";
   // console.log(this.userInfo.email);
    for(let i=0; i<this.users.length;i++){
      if(this.userInfo.email == this.users[i].email){
        this.userInfo.password = this.users[i].password;
      //  console.log("password ",this.userInfo.password);
       
      }
      
    }
    this.sendMail();
  }
  sendMail(){
    if(this.userInfo.password == ""){
      alert("not registerd !!")
    }
    this.userinfoService.sendEmailPassword(this.userInfo).subscribe( data=>{
      //console.log(data);
      
    }, error=> console.log(error)    )
  }

}
 