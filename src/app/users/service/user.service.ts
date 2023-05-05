import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = environment.BaseUrl;
  userUrl = 'users/';
  authUrl = 'auth/';
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get(this.baseUrl + this.userUrl).pipe(
      map((res) => {
        console.log(res);
      })
    );
  }

  userLogin(model: any) {
    return this.http.post(this.baseUrl + this.authUrl + 'login', model);
  }
}
