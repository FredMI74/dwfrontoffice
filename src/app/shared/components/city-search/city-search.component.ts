import { Component, forwardRef, OnInit } from '@angular/core';
import { User } from '@feature/models/user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Cities } from './cities';
import { NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'dw-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CitySearchComponent),
      multi: true
    }
  ]
})

// https://www.freakyjolly.com/autocomplete-using-angular-ng-autocomplete-package-tutorial-by-example/#.YCUASWhKjIU
// https://medium.com/joolsoftware/creating-a-custom-formcontrol-in-angular-da92f2f47733

export class CitySearchComponent implements OnInit {

  value = 0;
  onChange: any = () => { };
  onTouched: any = () => { };

  private  _currentUser: User = JSON.parse(localStorage.getItem('currentUser') || '{}');

  private _headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Bearer ' + this._currentUser.tokenJwt
  });

  keyword = 'nome';
 
  public data: any;
  listCities: Cities = new Cities;

  selectEvent(item:any) {
    this.onChange(item.id);
  }

  onChangeSearch(search: string) {
    this.list_cities(search).subscribe((response) => {
      this.listCities = response;
      if (this.listCities.resultado.erro === false) {
        this.data = this.listCities.conteudo;
        }
    });
  }

  onFocused(e:any) {
    // do something
  }

  searchCleared() {
    this.onChange(0);
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

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
 }
 registerOnTouched(fn: any): void {
    this.onTouched = fn;
 }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
