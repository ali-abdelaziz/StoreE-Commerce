import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';
import { product } from '../models/product';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {
  search = new BehaviorSubject<string>("");
  productDetails: any;
  private apiUrl = environment.apiUrl;



  constructor(private http:HttpClient) { }

  getAllProducts() {
    return this.http.get<product>(`${this.apiUrl}/products`)
  }

  getProductById(id: product) {
    return this.http.get<product>(`${this.apiUrl}/products/` + id)
  }

  addEditProduct(postData: any, selectedPdt: any) {
    if(!selectedPdt) {
    return this.http.post(`${this.apiUrl}/products/add`, postData);
    }else {
      return this.http.put(`${this.apiUrl}/products/${selectedPdt.id}`, postData);
    }

  }

  // deleteProduct(productId: number): Observable<any> {
  //   return this.http.delete(`${this.apiUrl}/products/${productId}`)
  // }


    //  get the token from the local storage and using it for every request
  deleteProduct(productId: number): Observable<any> {
    let headers = new HttpHeaders()
    headers.append('Authorization', JSON.stringify(localStorage.getItem('token')))
    return this.http.delete(`${this.apiUrl}/products/${productId}`, {headers})
    // return this.http.delete('https://crud-107i.onrender.com/products/delete-product/{id}', {headers})
  }

}