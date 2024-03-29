import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl = 'https://restcountries.com/v3.1/all?fields=name,flags';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.baseUrl);
    }
}
