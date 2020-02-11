import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from '../models/interfaces';
@Injectable({
  providedIn: 'root'

})
export class SubjectsService {
  apiRoot = 'http://localhost:3000/subjects/';
  constructor(public httpClient: HttpClient) {
  }
  public getSubjects() {
    return this.httpClient.get<Subject[]>(this.apiRoot).toPromise();
  }
  getSubject(id: string) {
    return this.httpClient.get<Subject>(this.apiRoot + id).toPromise();
  }

}
