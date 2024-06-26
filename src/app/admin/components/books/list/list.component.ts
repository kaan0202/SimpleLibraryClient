import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ListBook } from 'src/app/contracts/List/list-book';
import { CustomToastrService, ToastrPosition, ToastrType } from 'src/app/services/common/custom-toastr.service';
import { BookService } from 'src/app/services/models/book.service';



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
export class ListComponent  {
constructor(private book:BookService,private toastr:CustomToastrService){this.getallBooks();}


@ViewChild(MatPaginator) paginator:MatPaginator
  displayedColumns: string[] = ['Id', 'PageOfNumber', 'AuthorName', 'AuthorBirthDay','AuthorSurname','CatalogName','LanguageName',"menus"];
  dataSource: MatTableDataSource<any>;
  books:any;
 async getallBooks(){
   const allBooks:{ data:ListBook[],message:string,success:boolean,totalCount:number}=  await this.book.read()
     this.dataSource = new MatTableDataSource<any>(allBooks.data)
     this.paginator.length = allBooks.totalCount;

  }

 async pageChanged(){
    await this.getallBooks();
  }
}
