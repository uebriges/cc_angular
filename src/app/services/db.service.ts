import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IEnsemblAssemblies } from '../types';

// Retrieving data of a public postgres DB
@Injectable()
export class DBService {
  dbRestEndPointURL = environment.readFromDBService;
  constructor(private http: HttpClient) {}

  getDataFromDB() {
    return this.http.get<IEnsemblAssemblies[]>(this.dbRestEndPointURL);
  }
}
