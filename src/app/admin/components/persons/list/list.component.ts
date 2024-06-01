import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListPerson } from 'src/app/contracts/List/list-person';
import { PersonService } from 'src/app/services/models/person.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  displayedColumns: string[] = ['Id', 'PageOfNumber', 'AuthorName', 'AuthorBirthDay','AuthorSurname','CatalogName','LanguageName',"menus"];
  dataSource : MatTableDataSource<any>;
  persons:any;
  @ViewChild(MatPaginator) paginator:MatPaginator
  constructor(private person : PersonService){}
async getPersons(){
 const allPersons:{data:ListPerson[],message:string,success:boolean,totalCount:number} =  await this.person.read();
  this.dataSource = new MatTableDataSource<any>(allPersons.data)
  this.paginator.length = allPersons.totalCount

}

async pageChanged(){
  await this.getPersons;
}
}
