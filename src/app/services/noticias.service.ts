import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  constructor(private _http:HttpClient) { }

  
  getNews(parameters: any): Observable<any>{
    const URL = `https://newsapi.org/v2/top-headlines?country=${parameters.country}&category=${parameters.category}&apiKey=6a3d0018a14b49d09c1d0461cf58d55a`;
  
    return this._http.get(URL)
  }

}
