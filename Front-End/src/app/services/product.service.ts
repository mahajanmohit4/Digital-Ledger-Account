import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/api/v1/products";
  private baseUrl1 = "http://localhost:8080/api/v1/products1";
  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseUrl}`);
  }

  createProduct(product: Product): Observable<object>{
    return this.httpClient.post(`${this.baseUrl}`,product);
  }

  updateProduct(id: number | undefined, product: Product): Observable<object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, product);
  }
  updateProduct1(id: number | undefined, product: Product): Observable<object>{
    return this.httpClient.put(`${this.baseUrl1}/${id}`, product);
  }


  deleteProduct(id: number | undefined): Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
  
  getProductById(id: number | undefined): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseUrl}/${id}`);
  }
}
