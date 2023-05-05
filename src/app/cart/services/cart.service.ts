import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  baseUrl = environment.BaseUrl;
  url = 'carts/';
  constructor(private http: HttpClient) {}

  creatNewCart(model: any) {
    return this.http.post(this.baseUrl + this.url, model);
  }

  getAllCarts(param?: any) {
    let params = new HttpParams();
    if (param) {
      params = params
        .append('startdate', param?.startDate)
        .append('enddate', param?.endDate);
    }
    return this.http.get(this.baseUrl + this.url, { params });
  }

  deleteCart(id: number) {
    return this.http.delete(this.baseUrl + this.url + id);
  }

  shoeDetails() {}
}
