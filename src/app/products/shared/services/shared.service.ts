import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject} from 'rxjs'
import { product } from '../../products-list/models/product';



@Injectable({
  providedIn: 'root'
})
export class SharedService {
  search = new BehaviorSubject<string>("");
  productDetails: any;
  product: product[] = []

  constructor(private http:HttpClient) { }

  getAllProducts() {
    // return this.http.get<product>('https://fakestoreapi.com/products')
    // return this.http.get<product>('https://dummyjson.com/products?limit=10&skip=0')
    return this.http.get<product>('https://dummyjson.com/products')
  }

  getProductById(id: product) {
    // return this.http.get('https://fakestoreapi.com/products/' + id)
    return this.http.get<product>('https://dummyjson.com/products/' + id)
  }

  saveProduct(postData: any) {
    // return this.http.post('https://fakestoreapi.com/products', postData);
    return this.http.post('https://dummyjson.com/products/add', postData);
  }
}
