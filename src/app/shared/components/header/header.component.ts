import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { CartComponent } from 'src/app/cart/components/cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartProducts: any;
  constructor(private router: Router, public app: AppComponent) {}

  ngOnInit(): void {}

  logout() {
    localStorage.clear();
    this.app.isLoggedIn = false;
    this.router.navigateByUrl('/login');
  }
}
