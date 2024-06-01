import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
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
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    EmployeesComponent,
    CreateComponent,
    ListComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild([{path:"",component:EmployeesComponent}]),MatButtonModule,MatTableModule,MatFormFieldModule,MatSidenavModule,MatInputModule,MatSelectModule,MatIconModule,MatPaginatorModule,MatMenuModule
  ]
})
export class EmployeesModule { }
