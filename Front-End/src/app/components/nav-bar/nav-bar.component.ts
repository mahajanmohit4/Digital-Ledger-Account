import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor( private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
  }

  logout(){
    
    this.loginService.logout();
    this.router.navigate(['login']);
  }

}
