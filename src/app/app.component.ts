import { Component } from '@angular/core';
import { DBService } from './services/db-service.service';
import { FileService } from './services/file-service.service';
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

  getDataFromDB() {
    this.dbService.getDataFromDB().subscribe(
      (data: IEnsemblAssemblies[]) => (this.ensemblAssemblies = data)
      //   [
      //   {
      //     common_name: data[0].common_name,
      //     ensembl_url: data[0].ensembl_url,
      //     example_chromosome: data[0].example_chromosome,
      //   },
      // ]
    );
  }

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
  }

  logEnsembleAssemblies() {
    console.log('Log: ', this.ensemblAssemblies);
  }

  logPackageJson() {
    console.log('Log: ', this.packageJson);
  }

  ngOnInit(): void {
    this.getDataFromDB();
    this.getDataFromFile();
  }
}
