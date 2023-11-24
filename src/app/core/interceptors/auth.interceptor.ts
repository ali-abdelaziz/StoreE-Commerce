import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request)

    if(request.url.includes('product')){
      console.log('This is an example of how to use the interceptor')
    }

    const newRequest = request.clone({
      // url: "test"
      headers: request.headers.append('Authorization', JSON.stringify(localStorage.getItem('token')))
    })
    return next.handle(newRequest);
    // return next.handle(request);
  }
}
