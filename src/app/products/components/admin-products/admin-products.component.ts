import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent implements OnInit {
  addProductForm!: FormGroup;
  base64: any;
  products: Product[] = [];
  categories: string[] = [];
  id: number = 0;
  selectedCategory: string = '';

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      title: [],
      price: [],
      description: [],
      image: [],
      category: [],
    });
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.productsService.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        console.log(this.products);
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

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { size: 'xl', centered: true });
  }

  getSelectedCategory(cat: any) {
    this.addProductForm.controls['category'].setValue(cat.target.value);
  }

  getImagePath(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.addProductForm.controls['image'].setValue(
        'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'
      );
    };
  }

  viewProduct(i: number) {
    let product = this.products[i];
    this.id = product.id;
    this.selectedCategory = product.category;
    this.base64 = product.image;
    this.addProductForm.patchValue(product);
  }

  save() {
    let model = this.addProductForm.value;
    if (this.id != 0) {
      this.productsService.updateProduct(this.id, model).subscribe((res) => {
        alert('Product updated successfully');
      });
    } else {
      this.productsService.addProduct(model).subscribe((res) => {
        alert('Added product successfully');
        this.formResete();
      });
    }
  }

  deleteProduct(id: number) {
    this.productsService.deleteProduct(id).subscribe((res) => {
      alert('Product deleted successfully');
    });
  }

  formResete() {
    this.addProductForm.reset();
    this.id = 0;
    this.base64 = '';
    this.selectedCategory = '';
  }
}
