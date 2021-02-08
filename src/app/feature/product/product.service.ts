import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Products } from './../models/products';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  consultProduct(code: number, description: string, department: number) {

    const userOnline = JSON.parse(String(localStorage.getItem('currentUser')));

    var _headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + userOnline.tokenJwt
    });

    const body = new HttpParams()
      .set('descricao', description)
      .set( 'id', code.toString())
      .set('token', userOnline.token);

    return this.http.post<Products>(
      `${environment.apiUrl}/api/consultar_tp_produto`,
      body.toString(),
      { headers: _headers }
    );
  }

}
