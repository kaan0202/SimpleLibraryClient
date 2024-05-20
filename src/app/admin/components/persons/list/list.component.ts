import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PersonService } from 'src/app/services/models/person.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  displayedColumns: string[] = ['Id', 'PageOfNumber', 'AuthorName', 'AuthorBirthDay','AuthorSurname','CatalogName','LanguageName'];
  dataSource : MatTableDataSource<any>;
  persons:any;
  constructor(private person : PersonService){}
getCatalogs(){
  this.person.read().then(response => this.persons = response.data);
  this.dataSource = new MatTableDataSource<any>(this.persons)
}

}
