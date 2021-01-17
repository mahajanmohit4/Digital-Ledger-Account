import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../classes/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baserUrl = "http://localhost:8080/api/v1/customers";
  constructor( private httpClient: HttpClient) { }

  getCusotmer(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baserUrl}`);
  }

  createCustomer(customer: Customer): Observable<object>{
    return this.httpClient.put(`${this.baserUrl}`, customer);
  }
} 
