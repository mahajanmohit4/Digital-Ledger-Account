import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../classes/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = "http://localhost:8080/api/v1/categorys";

  constructor(private httpClient: HttpClient) { }

  createCategory(category: Category): Observable<object>{
    return this.httpClient.post(`${this.baseUrl}`,category);
  }
  getAllCategory(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.baseUrl}`);
  }
  updateCategory(id: number | undefined, category: Category): Observable<object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,category);
  }
  deleteCategory(id: number | undefined): Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
  getCategoryById(id: number | undefined):Observable<Category>{
    return this.httpClient.get<Category>(`${this.baseUrl}/${id}`);
  }
}
