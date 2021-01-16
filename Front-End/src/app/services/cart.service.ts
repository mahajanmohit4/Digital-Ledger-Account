import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../classes/cart';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private baseUrl = "http://localhost:8080/api/v1/cart";
  private baseUrl2 = "http://localhost:8080/api/v1/cartdisount";
  constructor( private httpClient: HttpClient) { }

  getCartList(): Observable<Cart[]>{
    return this.httpClient.get<Cart[]>(`${this.baseUrl}`);
  }
  createCart(cart: Cart): Observable<object>{
    return this.httpClient.post(`${this.baseUrl}`, cart);
  }
  deleteCart(id:number | undefined): Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
  updateCart(id:number | undefined, cart:Cart): Observable<object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, cart)
  }
  updateDiscount(id:number | undefined, cart:Cart): Observable<object>{
    return this.httpClient.put(`${this.baseUrl2}/${id}`, cart)
  }
}
