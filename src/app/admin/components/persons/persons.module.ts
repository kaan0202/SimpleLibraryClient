import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsComponent } from './persons.component';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    PersonsComponent,
    CreateComponent,
    ListComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild([{path:"",component:PersonsComponent}]),MatButtonModule,MatTableModule,MatFormFieldModule,MatSidenavModule,MatInputModule,MatSelectModule,MatIconModule,MatMenuModule,MatPaginatorModule
  ]
})
export class PersonsModule { }
