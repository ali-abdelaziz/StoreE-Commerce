import { ConfirmationService, MessageService } from 'primeng/api';
import { product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
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

  constructor(private productService: ProductsListService,
     private confirmationService: ConfirmationService,
     private messageService: MessageService) {}

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

  // saveOrUpdateProductList(newData: any) {
  //   if(newData.id  === this.selectedProduct.id) {
  //     const productIndex = this.products.findIndex(data => data.id === newData.id)
  //     this.products[productIndex] = newData;
  //   }else {
  //     this.products.unshift(newData);
  //   }

  //   this.getProducts();
  // }


  saveOrUpdateProductList(newData: any) {

      this.products.unshift(newData);
    }


  showEditModal(product: product) {
    this.displayAddEditModal = true;
    this.selectedProduct = product;
  }

  deleteProduct(product: product) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this product?',
      accept: () => {
        // Actual logic to perform a confirmation
        this.productService.deleteProduct(product.id).subscribe(
          (Response: any) => {
            // this.getProducts();
            this.products = this.products.filter(data => data.id !==product.id)
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Deleted Successfully' });
          },
          (error: any) => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
          }
        )
      }
  });
  }


}
