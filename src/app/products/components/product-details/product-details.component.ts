import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { AllProductsComponent } from '../all-products/all-products.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [AllProductsComponent],
})
export class ProductDetailsComponent implements OnInit {
  id!: number;
  product!: Product;
  loader: boolean = false;
  numbers: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    public pc: AllProductsComponent
  ) {
    this.id = this.route.snapshot.paramMap.get('id') as unknown as number;
  }

  ngOnInit(): void {
    this.getProductData();
  }

  getProductData() {
    this.loader = true;
    this.productService.getSingleProduct(this.id).subscribe((res: any) => {
      this.product = res;
      this.loader = false;
      console.log(this.product);
      this.numbers = Array(Math.round(this.product.rating.rate)).map(
        (x, i) => i
      );
      console.log(this.numbers);
    });
  }
}
