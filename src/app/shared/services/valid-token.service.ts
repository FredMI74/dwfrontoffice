import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ValidTokenService {
  constructor(private http: HttpClient) {}
  retorno: any;
  groupProd(token: string, tokenJwt: string)  : Observable<any>{
    var _headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + tokenJwt,
    });

    const body = new HttpParams()
     .set('id', '999')
     .set('token', token);

    return this.http.post<any>(
      `${environment.apiUrl}/api/consultar_grp_produto`,
      body.toString(),
      { headers: _headers }
    )
    .pipe(
      catchError(() => { return of({ "conteudo": [], "resultado": { "erro": true, "mensagem": "ops"}})})
    )
 }

}
