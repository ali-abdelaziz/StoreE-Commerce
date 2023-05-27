import { Component, OnInit } from '@angular/core';
import { product } from '../../models/product';
import { ProductsListService } from '../../services/products-list.service';


@Component({
  selector: 'app-addedit-product',
  templateUrl: './addedit-product.component.html',
  styleUrls: ['./addedit-product.component.css'],
})
export class AddeditProductComponent implements OnInit {
  products: product[] = [];
  displayAddModal: boolean = false;

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
    this.displayAddModal = true;
  }

  hideAddModal(isClosed: boolean) {
    this.displayAddModal = !isClosed;
  }

  saveProductToList(newData: any) {
    this.products.unshift(newData);
  }

}
