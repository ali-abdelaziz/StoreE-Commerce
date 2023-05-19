// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http'

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductsListService {

//   constructor(private http:HttpClient) { }

//   getAllProducts() {
//     // return this.http.get('https://fakestoreapi.com/products')
//     return this.http.get<any>('https://dummyjson.com/products/')
//   }
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import { map } from 'rxjs/operators';
import { BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {
  search = new BehaviorSubject<string>("");
  productDetails: any;

  constructor(private http:HttpClient) { }

  getAllProducts() {
    return this.http.get<any>('https://fakestoreapi.com/products')
    // return this.http.get<any>('https://dummyjson.com/products/')
    // return this.http.get<any>('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
    // .pipe(map((res:any)=> {
    //   return res;
    // }))
  }

  // viewDetails(product: any) {
  //   this.productDetails.push(...product);
  // }

  getProductById(id: any) {
    return this.http.get('https://fakestoreapi.com/products/' + id)
  }

  createNewProduct(model: any) {
    return this.http.post('https://fakestoreapi.com/products', model)
  }
}