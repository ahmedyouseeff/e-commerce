import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { AdminCartComponent } from './cart/components/admin-cart/admin-cart.component';
import { AdminProductsComponent } from './products/components/admin-products/admin-products.component';
import { AddUserComponent } from './users/components/add-user/add-user.component';
import { LoginComponent } from './users/components/login/login.component';
import { HomeComponent } from './users/components/home/home.component';

const routes: Routes = [
  { path: 'products', component: AllProductsComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'admin-cart', component: AdminCartComponent },
  { path: 'admin-products', component: AdminProductsComponent },
  { path: 'signup', component: AddUserComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
