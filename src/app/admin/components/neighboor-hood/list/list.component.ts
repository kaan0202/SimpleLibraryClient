import { ListNeighboorHood } from './../../../../contracts/List/list-neighboor-hood';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NeighboorHoodService } from 'src/app/services/models/neighboor-hood.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  displayedColumns: string[] = ['Id', 'PageOfNumber', 'AuthorName', 'AuthorBirthDay','AuthorSurname','CatalogName','LanguageName',"menus"];
  dataSource : MatTableDataSource<any>;
  neighs:any;
  @ViewChild(MatPaginator) paginator:MatPaginator
  constructor(private neigh : NeighboorHoodService){}
 async getNeighboors(){
 const allNeigh:{data:ListNeighboorHood[],message:string,success:boolean,totalCount:number} =  await this.neigh.read(this.paginator?this.paginator.pageIndex:0,this.paginator?this.paginator.pageSize:5);
  this.dataSource = new MatTableDataSource<any>(allNeigh.data)
  this.paginator.length = allNeigh.totalCount
}

async pageChanged(){
 await this.getNeighboors;
}
}
