import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  base_url = "http://localhost:8080/cart";
  //private url = '/product';

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    console.log("in service");
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    console.log(this.http.get<Product[]>(this.base_url+"/product"));
    return this.http.get<Product[]>(this.base_url+"/product");
  }

  delete(pro: Product): Observable<Product[]> {
    console.log("in service");
    return this.http.post<Product[]>(this.base_url+"/deleteProduct",pro);
  }
  
  public update(pro: Product):Observable<Product[]>{
    return this.http.put<Product[]>(this.base_url+"/update", pro);
}

  public getSearch(search:string):Observable<Product[]>{
    console.log("in service search "+search);
    return this.http.post<Product[]>(this.base_url+"/search",search)
  }
}
