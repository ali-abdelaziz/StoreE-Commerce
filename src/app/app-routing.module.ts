import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/products-list/components/all-products/all-products.component';
import { ProductDetailsComponent } from './products/products-list/components/product-details/product-details.component';
import { AddeditProductComponent } from './products/products-list/components/addedit-product/addedit-product.component'
import { LoginComponent } from './products/auth/components/login/login.component';

const routes: Routes = [
  {path:"products" , component: AllProductsComponent},
  {path:"details/:id" , component: ProductDetailsComponent},
  {path:"addproduct", component: AddeditProductComponent},
  {path: "login", component: LoginComponent},
  {path:"**" , redirectTo:"products" , pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
