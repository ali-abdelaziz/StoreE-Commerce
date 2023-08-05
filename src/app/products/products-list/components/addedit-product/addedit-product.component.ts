import { product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
// import { product } from '../../models/product';
import { ProductsListService } from '../../services/products-list.service';


@Component({
  selector: 'app-addedit-product',
  templateUrl: './addedit-product.component.html',
  styleUrls: ['./addedit-product.component.css'],
})
export class AddeditProductComponent implements OnInit {
  products: product[] = [];
  displayAddEditModal: boolean = false;
  selectedProduct: any = null;

  constructor(private productService: ProductsListService) {}

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.productService.getAllProducts().subscribe((res:any) => {
      console.log(res);
      this.products = res.products
    })
  }

  showAddModal() {
    this.displayAddEditModal = true;
    this.selectedProduct = null;
  }

  hideAddModal(isClosed: boolean) {
    this.displayAddEditModal = !isClosed;
  }

  saveOrUpdateProductList(newData: any) {
    // if(newData.id  === this.selectedProduct.id) {
    //   const productIndex = this.products.findIndex(data => data.id === newData.id)
    //   this.products[productIndex] = newData;
    // }else {
    //   this.products.unshift(newData);
    // }

    // this.getProducts();
  }

  showEditModal(product: product) {
    this.displayAddEditModal = true;
    this.selectedProduct = product;
  }

}
