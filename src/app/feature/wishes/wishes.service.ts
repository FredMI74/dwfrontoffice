import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})

export class WhishesService {
  constructor(private http: HttpClient) {}
 
  list(description: string = '') {
    var  currentUser = new User();
    currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

    var _headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + currentUser.tokenJwt
    });
 console.log(currentUser);
    const body = new HttpParams()
      .set('descricao', description)
      .set('token', currentUser.token);

    return this.http.post<any>(
      `${environment.apiUrl}/api/consultar_desejo`,
      body.toString(),
      { headers: _headers }
    );
  }

}
