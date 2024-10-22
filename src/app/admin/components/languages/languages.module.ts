import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesComponent } from './languages.component';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { DeleteDirective } from '../../directives/delete.directive';
import { DialogModule } from '../../dialogs/delete-dialog/dialog.module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';

import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    LanguagesComponent,
    CreateComponent,
    ListComponent,
    DeleteDirective,



  ],
  imports: [
    CommonModule,RouterModule.forChild([{path:"",component:LanguagesComponent}]),MatButtonModule,MatTableModule,MatFormFieldModule,MatSidenavModule,MatInputModule,MatSelectModule,MatIconModule,MatMenuModule,DialogModule,MatPaginatorModule,FormsModule,MatInputModule,MatDialogModule
  ]
})
export class LanguagesModule { }
