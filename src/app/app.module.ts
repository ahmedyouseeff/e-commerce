import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared/shared.module';
import { ProductsModule } from './products/products/products.module';
import { CartModule } from './cart/cart/cart.module';
import { UsersModule } from './users/users/users.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './users/components/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, FooterComponent],
  bootstrap: [AppComponent],
  imports: [
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    CartModule,
    UsersModule,
    BrowserModule,
  ],
})
export class AppModule {}
