import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './products/shared/shared.module';
import { ProductsListModule } from './products/products-list/products-list.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FilterPipe } from './products/shared/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsListModule,
    FormsModule,
    ReactiveFormsModule,
    // FilterPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
