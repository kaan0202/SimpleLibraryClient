import { MatTableDataSource } from '@angular/material/table';
import { LanguageService } from './../../../../services/models/language.service';
import { Component } from '@angular/core';
import { ListLanguage } from 'src/app/contracts/list-language';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  displayedColumns: string[] = ['Id', 'Name'];
  dataSource:MatTableDataSource<any>;
   languages:any;
  constructor(private language:LanguageService){
   this.getLanguages()
  }
 async getLanguages(){

     await  this.language.read().then((response => {
      this.languages = response.data
    })).finally(() => {
      console.log(this.languages)
    });

    this.dataSource = new MatTableDataSource<any>(this.languages)
  }
}
