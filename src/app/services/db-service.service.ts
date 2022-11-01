import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEnsemblAssemblies } from '../types';

@Injectable()
export class DBService {
  dbRestEndPointURL = 'http://localhost:3100/getDataFromDB';
  constructor(private http: HttpClient) {}

  getDataFromDB() {
    return this.http.get<IEnsemblAssemblies[]>(this.dbRestEndPointURL);
  }
}
