import { Component, OnInit } from '@angular/core';
import { Demo } from 'src/app/classes/demo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value = '';
  update(value: string) { 
    this.value = value;  
    console.log(value);
  } 

  value1 = '';
  update1(value1: string) { 
    this.value1 = value1;  
    console.log(value1);
  }
  constructor() { }

  ngOnInit(): void {
    this.demopt();
  }

   demos: Demo[] = [];

  demopt(){
    console.log("demo works");
    
    this.demos.push(new Demo("Mohit",22));
    this.demos.push(new Demo("deepak",24))
    console.log(this.demos);
    
  }
}
