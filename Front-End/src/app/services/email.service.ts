import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userInfo } from 'os';
import { Observable } from 'rxjs';
import { Userinfo } from '../userinfo';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseUrl = "http://localhost:8080/api/v1/email";


  constructor( private httpClient:HttpClient) { }

  sendEmailPassword(userinfo: Userinfo): Observable<object>{
    return this.httpClient.post(`${this.baseUrl}`, userinfo);
  }
} 
