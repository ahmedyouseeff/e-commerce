import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  loader: boolean = false;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loader = true;
    this.productsService.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        this.loader = false;
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  getCategories() {
    this.productsService.getAllCategories().subscribe(
      (res: any) => {
        this.categories = res;
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  filterByCategory(cat: any) {
    let category = cat.target.value;
    category == 'all'
      ? this.getProducts()
      : this.getProductsByCategory(category);
  }

  getProductsByCategory(category: string) {
    this.loader = true;
    this.productsService.filterCategories(category).subscribe((res: any) => {
      this.products = res;
      this.loader = false;
    });
  }

  public addToCart(product: any) {
    const cartProducts = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart')!)
      : [];

    const existProduct = cartProducts.find(
      (item: { item: any; quantity: any }) => item.item.id === product.item.id
    );

    if (existProduct) {
      alert('Already present in the cart');
    } else {
      cartProducts.push(product);
      localStorage.setItem('cart', JSON.stringify(cartProducts));
    }
  }
}
