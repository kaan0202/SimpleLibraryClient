import { MatTableDataSource } from '@angular/material/table';
import { LanguageService } from './../../../../services/models/language.service';
import { Component, ViewChild } from '@angular/core';
import { ListLanguage } from 'src/app/contracts/List/list-language';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  displayedColumns: string[] = ['Id', 'Name',"menus"];
  dataSource:MatTableDataSource<any>;
   languages:any;
   totalCount:number;
  constructor(private language:LanguageService){
   this.getLanguages()
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
 async getLanguages(){

  const allLanguages:{data:ListLanguage[],totalCount:number,message: string,success:boolean}  = await this.language.read(this.paginator?this.paginator.pageIndex:0,this.paginator?this.paginator.pageSize:5)
  this.dataSource = new MatTableDataSource<ListLanguage>(allLanguages.data);

  this.paginator.length = allLanguages.totalCount;
}
async pageChanged() {
  await this.getLanguages();
}
  }


