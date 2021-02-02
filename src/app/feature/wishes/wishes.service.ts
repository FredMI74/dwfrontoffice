import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})

export class WhishesService {
 
  private  _currentUser: User = JSON.parse(localStorage.getItem('currentUser') || '{}');

  private _headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Bearer ' + this._currentUser.tokenJwt
  });

  constructor(private http: HttpClient) {}

  list(description: string = '', id_tp_prod: string = "0") {

    const body = new HttpParams()
      .set('descricao', description)
      .set('id_tipo_produto', id_tp_prod)
      .set('token', this._currentUser.token);

    return this.http.post<any>(
      `${environment.apiUrl}/api/consultar_desejo`,
      body.toString(),
      { headers: this._headers }
    );
  }

  list_prods() {
    const body = new HttpParams()
      .set('descricao', '%')
      .set('id_situacao', '1')
      .set('token', this._currentUser.token);

    return this.http.post<any>(
      `${environment.apiUrl}/api/consultar_tp_produto`,
      body.toString(),
      { headers: this._headers }
    );
  }

}
