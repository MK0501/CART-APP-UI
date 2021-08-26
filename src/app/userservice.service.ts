import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './login/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  base_url = "http://localhost:8080/cart";

  constructor(private httpclient: HttpClient) { }
  public getUser(): Observable<User[]> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.httpclient.get<User[]>(this.base_url+"/user");
  }
  public saveUser(user: User){
    return this.httpclient.post<User>(this.base_url+"/newuser", user);
}
}
