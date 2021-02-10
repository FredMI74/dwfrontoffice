import { Component, OnInit } from '@angular/core';
import { User } from '@feature/models/user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { City, Cities } from './cities';

@Component({
  selector: 'dw-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})



export class CitySearchComponent implements OnInit {

  private  _currentUser: User = JSON.parse(localStorage.getItem('currentUser') || '{}');

  private _headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Bearer ' + this._currentUser.tokenJwt
  });


  keyword = 'nome';
 
  public data: City[] = [];
  listCities: Cities = new Cities;

    selectEvent(item:any) {
    // do something with selected item
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.

    this.list_cities(search).subscribe((response) => {
      this.listCities = response;
      
      if (this.listCities.resultado.erro === false) {
        this.data = Array.from(new Set(this.listCities.conteudo.map((p) => new City(p.id, p.nome + '/' + p.uf) )));
        console.log(this.data);
        }
    });

  }

  onFocused(e:any) {
    // do something
  }

  list_cities(s: string) {
    const body = new HttpParams()
    .set('nome', s)
    .set('token', this._currentUser.token);

    return this.http.post<Cities>(
      `${environment.apiUrl}/api/consultar_cidade`,
      body.toString(),
      { headers: this._headers }
    );
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
