import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject} from 'rxjs';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {
  search = new BehaviorSubject<string>("");
  productDetails: any;



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

}