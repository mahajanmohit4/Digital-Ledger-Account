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

  public validUsername = false;
  public validPassword = false;
  public validAddress = false;
  public validPhone = false;
  public validEmail = false;

  name() {
    console.log("name is blured ");
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){4,20}$/;
    let str: string | any
    str = this.userinfo.username;
    console.log(str);

    if (regex.test(str)) {
      console.log('Your name is valid');

      this.validUsername = true;
      console.log(this.validUsername);
    }
    else {
      console.log('Your name is not valid');

      this.validUsername = false;

    }

  }

  email() {
    console.log("email is blurred");
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str: string | any
    str = this.userinfo.email;
    if (regex.test(str)) {
      console.log('Your email is valid');

      this.validEmail = true;
    }
    else {
      console.log('Your email is not valid');

      this.validEmail = false;
    }
  }

  password(){
   
    console.log("password is blurred");

    let regex = /^[a-zA-Z]([0-9a-zA-Z]){4,20}$/;
    let str: string | any
    str = this.userinfo.password;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your password is valid');
      
        this.validPassword = true;
    }
    else {
        console.log('Your password is not valid');
      
        this.validPassword = false;

    }
  }


  phone(){
    
    console.log("phone is blurred");

    let regex = /^([0-9]){10}$/;
    let str: string | any;
    str = this.userinfo.phoneNo;


    if (regex.test(str)) {
        console.log('Your phone is valid');
      
        this.validPhone = true;
    }
    else {
        console.log('Your phone is not valid');
       
        this.validPhone = false;

    }
  }

  address() {
    console.log("address is blured ");
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){4,100}$/;
    let str: string | any
    str = this.userinfo.address;
    console.log(str);

    if (regex.test(str)) {
      console.log('Your address is valid');

      this.validUsername = true;
      console.log(this.validUsername);
    }
    else {
      console.log('Your address is not valid');

      this.validUsername = false;

    }

  }


  saveUserinfo() {
    this.userinfo.rol = "Admin";
    this.userinfoService.createUser(this.userinfo).subscribe(data => {
      console.log(data);
      window.alert("Registration Successfully Done !! ");
    },
      error => console.log(error));
    this.goToLogin();
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
  onSubmit() {
    console.log(this.userinfo);

   // this.saveUserinfo();
    if (this.validEmail && this.validUsername && this.validPhone && this.validPassword ) {
      this.saveUserinfo();
    }
    else alert("Bad Credential !!");
    
     
   
  }
}
