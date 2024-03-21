import { Injectable } from '@angular/core';
import { University } from './model/model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SampleServiceService {

  constructor(private http: HttpClient) { }
  getUniversities(){
    return this.http.get<University[]>('http://universities.hipolabs.com/search?country=United+States');
  }
}
