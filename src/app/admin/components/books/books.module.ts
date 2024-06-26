import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    BooksComponent,
    CreateComponent,
    ListComponent,

  ],
  imports: [
    CommonModule,RouterModule.forChild([{path:"",component:BooksComponent}]),MatTableModule,MatFormFieldModule,MatButtonModule,MatSidenavModule,MatInputModule,MatSelectModule,MatMenuModule,MatIconModule,MatPaginatorModule
  ]
})
export class BooksModule { }
