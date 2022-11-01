import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPackageJson } from '../types';

@Injectable()
export class FileService {
  fileRestEndpointURL = 'http://localhost:3100/readFileData';
  constructor(private http: HttpClient) {}

  getDataFromFile() {
    return this.http.get<IPackageJson>(this.fileRestEndpointURL);
  }
}
