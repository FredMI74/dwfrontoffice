import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})

export class WhishesService {
  constructor(private http: HttpClient) {}
 
  list(description: string = '', id_tp_prod: string = "0") {
    var  currentUser = new User();
    currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

    var _headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + currentUser.tokenJwt
    });
    
    const body = new HttpParams()
      .set('descricao', description)
      .set('id_tipo_produto', id_tp_prod)
      .set('token', currentUser.token);

    return this.http.post<any>(
      `${environment.apiUrl}/api/consultar_desejo`,
      body.toString(),
      { headers: _headers }
    );
  }

  list_prods() {
    var  currentUser = new User();
    currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

    var _headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + currentUser.tokenJwt
    });

    const body = new HttpParams()
      .set('descricao', '%')
      .set('id_situacao', '1')
      .set('token', currentUser.token);

    return this.http.post<any>(
      `${environment.apiUrl}/api/consultar_tp_produto`,
      body.toString(),
      { headers: _headers }
    );
  }

}
