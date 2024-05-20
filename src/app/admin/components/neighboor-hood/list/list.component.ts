import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NeighboorHoodService } from 'src/app/services/models/neighboor-hood.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  displayedColumns: string[] = ['Id', 'PageOfNumber', 'AuthorName', 'AuthorBirthDay','AuthorSurname','CatalogName','LanguageName'];
  dataSource : MatTableDataSource<any>;
  neighs:any;
  constructor(private neigh : NeighboorHoodService){}
getCatalogs(){
  this.neigh.read().then(response => this.neighs = response.data);
  this.dataSource = new MatTableDataSource<any>(this.neighs)
}

}
