import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './authors.component';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import {MatTableModule} from '@angular/material/table';

import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    AuthorsComponent,
    CreateComponent,
    ListComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild([{path:"",component:AuthorsComponent}]),MatTableModule,MatButtonModule,MatSidenavModule,MatInputModule,MatSelectModule,MatIconModule,MatPaginatorModule,MatMenuModule
  ]
})
export class AuthorsModule { }
