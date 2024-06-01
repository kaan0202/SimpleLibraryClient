import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListAuthors } from 'src/app/contracts/List/list-authors';
import { AuthorsService } from 'src/app/services/models/authors.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  displayedColumns: string[] = ['Id', 'Name', 'Surname', 'BirthDay'];
  dataSource:MatTableDataSource<any>;
authors:any;
@ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private author:AuthorsService){this.getAuthors()}

  async getAuthors(){
   const allAuthors:{data:ListAuthors[],message:string,success:boolean,totalCount:number} = await this.author.read()
    this.dataSource = new MatTableDataSource<any>(allAuthors.data);
    this.paginator.length = allAuthors.totalCount
  }

   async pageChanged(){
    this.getAuthors;
  }
  }

