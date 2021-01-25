import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../classes/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = "http://localhost:8080/api/v1/contact";

  constructor( private httpClient: HttpClient) { }

  createContact(contact: Contact): Observable<object>{
    return this.httpClient.post( `${this.baseUrl}`,contact);
  }
  
}
