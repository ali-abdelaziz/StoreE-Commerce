import { Component, OnInit } from '@angular/core';
import { ProductsListService } from '../../services/products-list.service';

@Component({
  selector: 'app-addedit-product',
  templateUrl: './addedit-product.component.html',
  styleUrls: ['./addedit-product.component.css'],
})
export class AddeditProductComponent implements OnInit {
  constructor(private service: ProductsListService) {}
  success: boolean = false;

  ngOnInit(): void {}

  // addProduct() {
  //   let Model = {
  //     title: '',
  //     price: '',
  //     description: '',
  //     image: '',
  //     category: ''
  //   }
  //   this.service.createNewProduct(Model).subscribe((res:any) => {
  //     return this.success = true
  //   })
  //   console.log(Model);
  // }

  addProduct() {
    return (this.success = true);
  }

}
