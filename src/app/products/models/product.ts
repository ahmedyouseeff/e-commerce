export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: any;
}

export interface CategoryProduct {
  item: Product;
  quantity: number;
}
