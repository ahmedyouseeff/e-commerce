import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../components/cart/cart.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { AdminCartComponent } from '../components/admin-cart/admin-cart.component';

@NgModule({
  declarations: [CartComponent, AdminCartComponent],
  imports: [CommonModule, SharedModule],
})
export class CartModule {}
