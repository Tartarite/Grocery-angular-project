import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ProductNavbarComponent } from './product-navbar/product-navbar.component';
import { ProductsDisplayComponent } from './products-display/products-display.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminAllProductsComponent } from './admin-all-products/admin-all-products.component';
import { AdminUpdateProductsComponent } from './admin-update-products/admin-update-products.component';
import { AdminDeleteProductsComponent } from './admin-delete-products/admin-delete-products.component';
import { AdminAddProductsComponent } from './admin-add-products/admin-add-products.component';
import { AdminReportsComponent } from './admin-reports/admin-reports.component';
import { RouterModule } from '@angular/router';
import { PopularProductsComponent } from './popular-products/popular-products.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { TestdirectiveDirective } from './testdirective.directive';
import { CheckoutComponent } from './checkout/checkout.component';
import { FilterPipe } from './filter.pipe';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    MaincontentComponent,
    FooterComponent,
    AboutComponent,
    ProductNavbarComponent,
    ProductsDisplayComponent,
    LoginComponent,
    RegistrationComponent,
    AdminNavbarComponent,
    AdminAllProductsComponent,
    AdminUpdateProductsComponent,
    AdminDeleteProductsComponent,
    AdminAddProductsComponent,
    AdminReportsComponent,
    PopularProductsComponent,
    NewProductsComponent,
    TestdirectiveDirective,
    CheckoutComponent,
    FilterPipe,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
