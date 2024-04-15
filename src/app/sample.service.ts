import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anime } from './dashboard/model';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) { }

  getPopulation(): Observable<Anime[]> {
    return this.http.get<any>('https://api.jikan.moe/v4/anime').pipe(map(response  => {
      return response.data as Anime[];
    }))
  }
}
