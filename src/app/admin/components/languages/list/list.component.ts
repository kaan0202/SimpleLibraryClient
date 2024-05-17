import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  displayedColumns: string[] = ['Id', 'PageOfNumber', 'AuthorName', 'AuthorBirthDay','AuthorSurname','CatalogName','LanguageName'];
  dataSource:any;
}
