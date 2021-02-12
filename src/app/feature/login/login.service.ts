import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Enterprises } from '../models/enterprise';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    var _headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const dados: string = `${btoa(username)};${btoa(password)}`;

    const body = new HttpParams()
      .set('dados', dados)
      .set('token', environment.anonToken);

    return this.http.post<User>(
      `${environment.apiUrl}/api/login_usuario`,
      body.toString(),
      { headers: _headers }
    );
  }

  empresa(id: string, token : string,  tokenJwt : string) {
    var _headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + tokenJwt,
    });

    const body = new HttpParams()
      .set('id', id)
      .set('token', token);

    return this.http.post<Enterprises>(
      `${environment.apiUrl}/api/consultar_empresa`,
      body.toString(),
      { headers: _headers }
    );
  }


  logout() {
    localStorage.removeItem('currentUser');
  }
}
