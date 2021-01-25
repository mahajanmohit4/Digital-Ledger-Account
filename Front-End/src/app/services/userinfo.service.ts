import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Userinfo } from '../userinfo';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
  private bUrl = "http://localhost:8080/api/v1/users";
  private baseUrl = "http://localhost:8080/api/v1/email";
  constructor(private httpClient: HttpClient) { }

  createUser(userinfo : Userinfo) : Observable<object>{
    return this.httpClient.post(`${this.bUrl}`,userinfo);
  }
  getUser(): Observable<Userinfo[]>{
    return this.httpClient.get<Userinfo[]>(`${this.bUrl}`);
  }

  sendEmailPassword(userInfo: Userinfo): Observable<object>{
    return this.httpClient.post(`${this.baseUrl}`, userInfo);
  }

}
