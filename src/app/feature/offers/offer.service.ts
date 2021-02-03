import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})

export class OfferService {
 
  private  _currentUser: User = JSON.parse(localStorage.getItem('currentUser') || '{}');

  private _headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Bearer ' + this._currentUser.tokenJwt
  });

  constructor(private http: HttpClient) {}

  add_offer(id_desejo : number, validade : Date, valor: number, url: string, descricao:string, destaque: string) {
    const body = new HttpParams()
      .set('id_desejo', id_desejo.toString())
      .set('id_empresa', this._currentUser.id_empresa.toString())
      .set('validade', validade.toString())
      .set('valor', valor.toString())
      .set('url',url)
      .set('descricao',descricao)
      .set('destaque',destaque?'S':'N')
      .set('token', this._currentUser.token);

    return this.http.post<any>(
      `${environment.apiUrl}/api/incluir_oferta`,
      body.toString(),
      { headers: this._headers }
    );
  }

}
