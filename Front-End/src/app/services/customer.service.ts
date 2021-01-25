import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../classes/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baserUrl = "http://localhost:8080/api/v1/customers";
  private baseUrl1 = "http://localhost:8080/api/v1/customeremail";
  private baseUrl2 = "http://localhost:8080/api/v1/reminderemail";
  constructor( private httpClient: HttpClient) { }

  getCusotmer(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baserUrl}`);
  }

  createCustomer(customer: Customer): Observable<object>{
    return this.httpClient.post(`${this.baserUrl}`, customer);
  }

  getCustomerById(id: number | undefined): Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.baserUrl}/${id}`);
  }

  getCustomerUpdate(id: number | undefined, customer: Customer): Observable<object>{
    return this.httpClient.put(`${this.baserUrl}/${id}`,customer);
  }

  sendBill(customer: Customer): Observable<object>{
    return this.httpClient.post(`${this.baseUrl1}`, customer);
  }
  reminderMail(customer: Customer): Observable<object>{
    return this.httpClient.post(`${this.baseUrl2}`, customer);
  }
} 
