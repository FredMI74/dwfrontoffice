import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Products } from '../models/product';
import { User } from '../models/user';
import { Wishes } from '../models/wish';

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

  list(description: string = "", id_tp_prod: string = "0",
       id: string = "", oferta: string = "",
       uf: string = "" , max_id: number = 0, pagina : number = 1 ) {

    const body = new HttpParams()
      .set('descricao', description)
      .set('id_tipo_produto', id_tp_prod)
      .set('id_situacao', '1')
      .set('id_empresa_oferta', this._currentUser.id_empresa.toString())
      .set('id', id)
      .set('oferta', oferta)
      .set('uf', uf)
      .set('paginacao','S')
      .set('max_id',max_id.toString())
      .set('pagina',pagina.toString())
      .set('token', this._currentUser.token);

    return this.http.post<Wishes>(
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

    return this.http.post<Products>(
      `${environment.apiUrl}/api/consultar_tp_produto`,
      body.toString(),
      { headers: this._headers }
    );
  }

}
