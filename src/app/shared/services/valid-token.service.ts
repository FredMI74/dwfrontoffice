import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ValidTokenService {
  constructor(private http: HttpClient) {}

  groupUser(idUser: string, token: string, tokenJwt: string) {
    var _headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + tokenJwt,
    });

    const body = new HttpParams().set('id_usuario', idUser).set('token', token);

    return this.http.post<any>(
      `${environment.apiUrl}/api/consultar_grp_permissoes_usuario`,
      body.toString(),
      { headers: _headers }
    );
  }
}
