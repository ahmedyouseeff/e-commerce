import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from 'src/app/products/services/products.service';
import { CategoryProduct, Product } from 'src/app/products/models/product';

@Component({
  selector: 'app-admin-cart',
  templateUrl: './admin-cart.component.html',
  styleUrls: ['./admin-cart.component.scss'],
})
export class AdminCartComponent implements OnInit {
  cartProducts: Cart[] = [];
  filterForm!: FormGroup;
  details: any;
  products: any[] = [];
  constructor(
    private service: CartService,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      startDate: [],
      endDate: [],
    });
    this.getAllCarts();
  }

  getAllCarts() {
    this.service.getAllCarts().subscribe((res: any) => {
      this.cartProducts = res;
    });
  }

  applyFilter() {
    let date = this.filterForm.value;
    this.service.getAllCarts(date).subscribe((res: any) => {
      this.cartProducts = res;
    });
  }

  deleteCart(id: number) {
    this.service.deleteCart(id).subscribe((res: any) => {
      this.getAllCarts();
    });
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { size: 'xl', centered: true });
  }

  viewCart(i: number) {
    this.details = this.cartProducts[i];
    this.products = [];
    for (let product of this.details.products) {
      this.productService
        .getSingleProduct(product.productId)
        .subscribe((res) => {
          this.products.push({ item: res, quantity: product.quantity });
        });
    }
  }
}
