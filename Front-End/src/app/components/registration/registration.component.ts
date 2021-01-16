import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserinfoService } from 'src/app/services/userinfo.service';
import { Userinfo } from 'src/app/userinfo';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userinfo: Userinfo = new Userinfo();

  constructor(private userinfoService: UserinfoService,
    private router: Router) { }

  ngOnInit(): void {
  }
  saveUserinfo(){
    this.userinfo.rol = "Admin";
    this.userinfoService.createUser(this.userinfo).subscribe(data => {
      console.log(data);
      window.alert("Registration Successfully Done !! ");
    },
    error => console.log(error));
    this.goToLogin();
  }
  goToLogin(){
    this.router.navigate(['/login']);
  }
  onSubmit(){
    console.log(this.userinfo);
    this.saveUserinfo();    
  }
}
