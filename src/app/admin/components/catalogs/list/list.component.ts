import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListCatalogs } from 'src/app/contracts/List/list-catalogs';
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
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private catalog : CatalogsService){}
 async getCatalogs(){
  const allCatalogs:{data:ListCatalogs[],totalCount:number,message: string,success:boolean} = await this.catalog.read(this.paginator?this.paginator.pageIndex:0,this.paginator?this.paginator.pageSize:5);

  this.dataSource = new MatTableDataSource<any>(allCatalogs.data);
 this.paginator.length =allCatalogs.totalCount
 }

 async pageChanged(){
   await this.getCatalogs;
 }
}
