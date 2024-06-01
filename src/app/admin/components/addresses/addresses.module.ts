import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressesComponent } from './addresses.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  declarations: [
    AddressesComponent,
    ListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild([{path:"",component:AddressesComponent}]),MatTableModule,MatFormFieldModule,MatButtonModule,MatSidenavModule,MatInputModule,MatSelectModule,MatMenuModule,MatIconModule,MatPaginatorModule
  ]
})
export class AddressesModule { }
