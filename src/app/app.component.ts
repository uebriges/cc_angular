import { Component } from '@angular/core';
import { DBService } from './services/db.service';
import { FileService } from './services/file.service';
import { IEnsemblAssemblies, IPackageJson } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DBService, FileService],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ensemblAssemblies: IEnsemblAssemblies[] | undefined;
  packageJson: IPackageJson | undefined;

  constructor(private fileService: FileService, private dbService: DBService) {}

  // Retrieve data from DB
  getDataFromDB() {
    this.dbService.getDataFromDB().subscribe(
      (data: IEnsemblAssemblies[]) =>
        (this.ensemblAssemblies = data.filter(
          (assembly: IEnsemblAssemblies) => {
            return assembly.common_name !== '' && assembly.common_name !== null;
          }
        ))
    );
    this.packageJson = undefined;
  }

  // Retrieve data from file
  getDataFromFile() {
    this.fileService.getDataFromFile().subscribe(
      (data: IPackageJson) =>
        (this.packageJson = {
          name: data.name,
          version: data.version,
          main: data.main,
          type: data.type,
        })
    );
    this.ensemblAssemblies = undefined;
  }
}
