import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Products, listDepartments } from './../models/productDepartments';


@Injectable({
  providedIn: 'root',
})
export class ProductService {


  private userOnline = JSON.parse(String(localStorage.getItem('currentUser')));

   private _headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Bearer ' + this.userOnline.tokenJwt
  });

  constructor(private http: HttpClient) {}



  consultProduct(code: number = 0, description: string = '', department: string = '') {
    const body = new HttpParams()
      .set('department', department)
      .set('descricao', description)
      .set( 'id', code.toString())
      .set('token', this.userOnline.token);

    return this.http.post<Products>(
      `${environment.apiUrl}/api/consultar_tp_produto`,
      body.toString(),
      { headers: this._headers }
    );
  }

  list_departments() {
    const body = new HttpParams()
    .set('descricao', "%")
    .set( 'id_situacao', '1')
    .set('token', this.userOnline.token);

    return this.http.post<listDepartments>(
      `${environment.apiUrl}/api/consultar_grp_produto`,
      body.toString(),
      { headers: this._headers }
    );
  }

}
