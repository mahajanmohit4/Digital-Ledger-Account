import { Component, OnInit } from '@angular/core';

import { Customer } from 'src/app/classes/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { UserinfoService } from 'src/app/services/userinfo.service';
import { Userinfo } from 'src/app/userinfo';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {
  
  customers: Customer[] = []
  customer: Customer = new Customer();
  userInfos : Userinfo[] = [];
  constructor(private customerService: CustomerService,
    private userinfoService:UserinfoService) { }
  unpaidCustomerArr: Customer[] = []
  todayUnpaidCustomerArr: Customer[] = []
  isValid:boolean = false;
  ngOnInit(): void {
    this.getUser();
   
  }

  getUser(){
    this.userinfoService.getUser().subscribe(data => {
      this.userInfos=data;
      //console.log(this.userInfos);
      this.getCustormers();
    })
  }
  private getCustormers(){
    this.customerService.getCusotmer().subscribe( data =>{
      this.customers = data;
      //console.log(data);
      this.customers = data;
      this.unpaidCustomers()
    })
  }
  private unpaidCustomers(){
    //console.warn(this.userInfos.length);
    let id = Number(localStorage.getItem("user_id"))
    //console.warn(id);
    
      for(let i=0; i<this.customers.length; i++){
        if(this.customers[i].paymentStatus == "Unpaid" && this.customers[i].id == id){
          this.unpaidCustomerArr.push(this.customers[i]);
        }
      }
  
    
    console.log(this.unpaidCustomerArr);
    this.getTodayUnpaidCustomer()
  }

  paymentDone(id: number | any){
    this.customer.paymentStatus = "Paid";
    this.customerService.getCustomerUpdate(id, this.customer).subscribe(data => {
      console.log(data);
      window.alert("Payment Done !!")
      this.unpaidCustomerArr = [];
      this.todayUnpaidCustomerArr = [];
      this.ngOnInit();
    })
  }

  getTodayUnpaidCustomer(){
    let todayDate = new Date().toISOString().split('T')[0];
    for(let i=0; i<this.unpaidCustomerArr.length; i++){
      if(this.unpaidCustomerArr[i].reminderDate == todayDate ){
        this.todayUnpaidCustomerArr.push(this.unpaidCustomerArr[i])
        this.isValid = true;
        this.customerService.reminderMail(this.unpaidCustomerArr[i]).subscribe(data => {
          
         })
      }
        
    }
    //console.log(this.todayUnpaidCustomerArr);
    
  }

}
