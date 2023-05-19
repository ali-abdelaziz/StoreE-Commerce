// import { Component, OnInit } from '@angular/core';
// import { ProductsListService } from '../../services/products-list.service';

// @Component({
//   selector: 'app-all-products',
//   templateUrl: './all-products.component.html',
//   styleUrls: ['./all-products.component.css']
// })
// export class AllProductsComponent implements OnInit {
//   products:any[] = []
//   constructor(private service:ProductsListService) {}

//   ngOnInit(): void {
//     this.getProducts()
//   }

//   getProducts() {
//     this.service.getAllProducts().subscribe((res:any) => {
//       this.products = res
//       console.log(res);
//     })
//   }

// }



import { Component, OnInit } from '@angular/core';
import { ProductsListService } from '../../services/products-list.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products:any [] = [];
  // products:any;
  searchKey:string = ""
  constructor(private service:ProductsListService) {}

  ngOnInit(): void {
    this.getProducts()

    this.service.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }

  getProducts() {
    this.service.getAllProducts().subscribe((res:any) => {
      console.log(res);
      this.products = res
    })
  }

}
