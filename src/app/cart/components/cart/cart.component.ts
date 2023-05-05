import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CategoryProduct } from 'src/app/products/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartProducts: CategoryProduct[] = [];
  totalPrice: number = 0;
  disabledBtn: boolean = false;
  successAddCart: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts() {
    this.cartProducts = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart')!)
      : [];
    this.getTotalPrice();
    console.log(this.cartProducts);
  }

  getTotalPrice() {
    this.totalPrice = 0;
    this.cartProducts.length == 0
      ? (this.disabledBtn = true)
      : (this.disabledBtn = false);
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.totalPrice +=
        this.cartProducts[i].item.price * this.cartProducts[i].quantity;
    }
  }

  addQuantity(i: number) {
    this.cartProducts[i].quantity++;
    this.getTotalPrice();
    this.detectChange();
  }
  minusQuantity(i: number) {
    if (this.cartProducts[i].quantity > 0) {
      this.cartProducts[i].quantity--;
      this.getTotalPrice();
      this.detectChange();
    }
  }

  detectChange() {
    this.getTotalPrice();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  deletFromCart(i: number) {
    this.cartProducts.splice(i, 1);
    this.detectChange();
  }

  deletAllFromCart() {
    this.cartProducts = [];
    this.detectChange();
  }

  addCartModel() {
    let products = this.cartProducts.map((product) => {
      return { productId: product.item.id, quantity: product.quantity };
    });
    let cartModel = {
      userId: 5,
      date: new Date(),
      products: products,
    };
    this.cartService.creatNewCart(cartModel).subscribe((res) => {
      console.log(res);
      this.cartProducts = [];
      this.detectChange();
      this.successAddCart = true;
    });

    console.log(cartModel);
  }
}
