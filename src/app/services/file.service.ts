import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPackageJson } from '../types';

// Retrieving parts of package.json file on the server
@Injectable()
export class FileService {
  fileRestEndpointURL = environment.readFromFileService;
  constructor(private http: HttpClient) {}

  getDataFromFile() {
    return this.http.get<IPackageJson>(this.fileRestEndpointURL);
  }
}
