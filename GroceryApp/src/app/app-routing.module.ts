import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminAllProductsComponent } from './admin-all-products/admin-all-products.component';
import { AdminAddProductsComponent } from './admin-add-products/admin-add-products.component';
import { AdminUpdateProductsComponent } from './admin-update-products/admin-update-products.component';
import { AdminDeleteProductsComponent } from './admin-delete-products/admin-delete-products.component';
import { AdminReportsComponent } from './admin-reports/admin-reports.component';
import { PopularProductsComponent } from './popular-products/popular-products.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { AdminGuard } from './admin.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { ProductsDisplayComponent } from './products-display/products-display.component';

const routes: Routes = [{ path: 'about', component: AboutComponent }, 
{ path: 'home', component: MaincontentComponent }, 
{ path: '', component: MaincontentComponent },
{ path: 'products/all', component:ProductsDisplayComponent }, 
{ path: 'login', component: LoginComponent }, 
{ path: "registration", component: RegistrationComponent },
{ path:"admin/all-products",component:AdminAllProductsComponent,canActivate:[AdminGuard]},
{ path:"admin/add-products",component:AdminAddProductsComponent,canActivate:[AdminGuard]},
{ path:"admin/update-products",component:AdminUpdateProductsComponent,canActivate:[AdminGuard]},
{ path:"admin/delete-products",component:AdminDeleteProductsComponent,canActivate:[AdminGuard]},
{ path:"admin/reports",component:AdminReportsComponent,canActivate:[AdminGuard]},
{ path:"products/new",component:NewProductsComponent},
{ path:"products/popular",component:PopularProductsComponent},
{ path:"checkout",component:CheckoutComponent},
{ path:"cart",component:CartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents=[AdminAllProductsComponent,AdminAddProductsComponent,AdminDeleteProductsComponent,AdminUpdateProductsComponent,AdminReportsComponent];
