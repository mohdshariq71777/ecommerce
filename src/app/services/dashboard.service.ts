import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  readonly PRODUCT_API_URL=`http://localhost:3430/api/products`
  readonly GET_ALL_PRODUCTS=`${this.PRODUCT_API_URL}/all-products`
  constructor(private http: HttpClient) { }
  getAllProducts():Observable<Product[]>{
    return this.http.get<{success:boolean,message:string,products:Product[]}>(this.GET_ALL_PRODUCTS).
    pipe(map(response=>response?.products));
  }
}
