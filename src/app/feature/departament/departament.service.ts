import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { User } from '../models/user';

@Injectable ({
    providedIn: 'root',
})

export class DepartamentService {
    constructor(private http: HttpClient) {}

    list(description: string = '', id: string = '0') {
        var currentUser = new User();
        currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

        var _headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + currentUser.tokenJwt
        });

        const body = new HttpParams()
            .set('descricao', description)
            .set('id', id)
            .set('token', currentUser.token);

        console.log('teste anelisa', this.http.post<any>(
            `${environment.apiUrl}/api/consultar_grp_produto`,
            body.toString(),
            {headers: _headers}
        ));
        return this.http.post<any>(
            `${environment.apiUrl}/api/consultar_grp_produto`,
            body.toString(),
            {headers: _headers}
        );
    }
}