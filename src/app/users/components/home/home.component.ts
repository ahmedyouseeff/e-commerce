import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/models/product';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  loader: boolean = false;
  mens = "men's clothing";

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.loader = true;
    this.productsService.getAllProducts().subscribe(
      (res: any) => {
        console.log(res);

        this.products = res;
        this.loader = false;
      },
      (err) => {
        console.log(err.message);
      }
    );
  }
}
