import { MatOption } from '@angular/material/core';
import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { CreateBook } from 'src/app/contracts/Create/create-book';
import { BookService } from 'src/app/services/models/book.service';
import { SpinnerType } from 'src/app/services/common/custom-spinner.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomToastrService } from 'src/app/services/common/custom-toastr.service';
import { LanguageService } from 'src/app/services/models/language.service';
import { ListLanguage } from 'src/app/contracts/List/list-language';
import { AuthorsService } from 'src/app/services/models/authors.service';
import { ListAuthors } from 'src/app/contracts/List/list-authors';
import { ListCatalogs } from 'src/app/contracts/List/list-catalogs';
import { CatalogsService } from 'src/app/services/models/catalogs.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements AfterViewInit {
  selected:string;
  authorName:string;
  languageName:string;
  constructor(private catalog:CatalogsService,  private spinner:NgxSpinnerService,private book:BookService,private toastr:CustomToastrService,private language:LanguageService,private author:AuthorsService) {}
  ngAfterViewInit(): void {
   this.listLanguage();
   //this.listAuthor();
   //this.listCatalog();
  }

  @Output() createdBooks:EventEmitter<CreateBook> = new EventEmitter();
 languages:ListLanguage[];
 catalogs:ListCatalogs[];
 authors:ListAuthors[];
  create(catalog:string,author:string,language:string,name:HTMLInputElement,pageOfNumber:HTMLInputElement){
    this.spinner.getSpinner(SpinnerType.Timer);
  const create_Book:CreateBook =new CreateBook();
 create_Book.name=name.value;
 create_Book.authorId = Number.parseInt(author);
 create_Book.languageId = Number.parseInt(language);
 create_Book.catalogId = Number.parseInt(catalog);
 create_Book.pageOfNumber = Number.parseInt(pageOfNumber.value)


  this.book.create(create_Book,()=>{
    this.spinner.getSpinner(SpinnerType.Timer)
 this.createdBooks.emit(create_Book);

    },

  )
}
async listLanguage(){
  const allLanguages:{data:ListLanguage[],totalCount:number,message: string,success:boolean}  = await this.language.read(0,5)
  this.languages = allLanguages.data
}

async listAuthor(){
  const allAuthors:{data:ListAuthors[],totalCount:number,message: string,success:boolean}  = await this.author.read(0,5)
 this.authors =allAuthors.data
}
async listCatalog(){
  const allCatalogs:{data:ListCatalogs[],totalCount:number,message: string,success:boolean} = await this.catalog.read(0,5);
 this.catalogs = allCatalogs.data
}
}
