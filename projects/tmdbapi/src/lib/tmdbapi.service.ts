import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigAPI, ConfigCountries, ConfigLanguages, Trending, Genre, Genres } from './tmdbapi.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TmdbapiService {
  TmdbAPIurl = 'https://api.themoviedb.org/3';
  TmdbAPIkey = 'fa286812af448bf2745c5c960c7b964e';
  constructor(private http : HttpClient) { }

  getConfigAPI(): Observable<ConfigAPI>{
    const url = `${this.TmdbAPIurl}/configuration?api_key=${this.TmdbAPIkey}`;
    return this.http.get<ConfigAPI>(url);
  }

  getConfigCountries():Observable<ConfigCountries>{
    const url = `${this.TmdbAPIurl}/configuration/countries?api_key=${this.TmdbAPIkey}`;
    return this.http.get<ConfigCountries>(url);
  }

  getConfigLanguages():Observable<ConfigLanguages>{
    const url = `${this.TmdbAPIurl}/configuration/languages?api_key=${this.TmdbAPIkey}`;
    return this.http.get<ConfigLanguages>(url);
  }

  getTrending(media_type:string, time_window:string):Observable<Trending>{
    const url = `${this.TmdbAPIurl}/trending/${media_type}/${time_window}?api_key=${this.TmdbAPIkey}`;
    return this.http.get<Trending>(url);
  }

  getGenres(media_type:string):Observable<Genres>{
    const url = `${this.TmdbAPIurl}/genre/${media_type}/list?api_key=${this.TmdbAPIkey}`;
    return this.http.get<Genres>(url);
  }


}
