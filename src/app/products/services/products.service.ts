import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl = environment.BaseUrl;
  url = 'products/';
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(this.baseUrl + this.url);
  }

  getAllCategories() {
    return this.http.get(this.baseUrl + this.url + 'categories');
  }

  filterCategories(category: string) {
    return this.http.get(this.baseUrl + this.url + 'category/' + category);
  }

  getSingleProduct(id: number) {
    return this.http.get(this.baseUrl + this.url + id);
  }

  addProduct(model: any) {
    return this.http.post(this.baseUrl + this.url, model);
  }

  updateProduct(id: number, model: any) {
    return this.http.put(this.baseUrl + this.url + id, model);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.baseUrl + this.url + id);
  }
}
