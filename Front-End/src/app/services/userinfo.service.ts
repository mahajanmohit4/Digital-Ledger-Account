import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Userinfo } from '../userinfo';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
  private bUrl = "http://localhost:8080/api/v1/users";
  constructor(private httpClient: HttpClient) { }

  createUser(userinfo : Userinfo) : Observable<object>{
    return this.httpClient.post(`${this.bUrl}`,userinfo);
  }
}
