export interface Cart {
  id: number;
  userId: number;
  date: Date;
  products: ProductInCart[];
}

export interface ProductInCart {
  productId: number;
  quantity: number;
}
