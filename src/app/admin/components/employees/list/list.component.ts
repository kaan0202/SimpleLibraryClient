import { ListCatalogs } from './../../../../contracts/List/list-catalogs';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CatalogsService } from 'src/app/services/models/catalogs.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  displayedColumns: string[] = ['Id', 'Name', 'Surname','Salary','Status','Gender',"menus"];
  dataSource : MatTableDataSource<any>;
  employees:any;
  constructor(private catalog : CatalogsService){}
  @ViewChild(MatPaginator) paginator:MatPaginator
 async getCatalogs(){
 const allCatalogs:{data:ListCatalogs[],message:string,success:boolean,totalCount:number} =  await this.catalog.read();
  this.dataSource = new MatTableDataSource<any>(allCatalogs.data)
  this.paginator.length = allCatalogs.totalCount;

}
 async pageChanged(){
await this.getCatalogs;
}

}
