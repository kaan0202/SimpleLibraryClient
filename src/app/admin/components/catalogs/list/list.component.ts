import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CatalogsService } from 'src/app/services/models/catalogs.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  displayedColumns: string[] = ['Id', 'CatalogName', 'LanguageName'];
  dataSource : MatTableDataSource<any>;
  catalogs:any;
  constructor(private catalog : CatalogsService){}
getCatalogs(){
  this.catalog.read().then(response => this.catalogs = response.data);
  this.dataSource = new MatTableDataSource<any>(this.catalogs)
}
}
