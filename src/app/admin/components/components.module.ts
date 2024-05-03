import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeighboorHoodModule } from './neighboor-hood/neighboor-hood.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CatalogsModule } from './catalogs/catalogs.module';
import { BooksModule } from './books/books.module';
import { AddressesModule } from './addresses/addresses.module';
import { AuthorsModule } from './authors/authors.module';
import { EmployeesModule } from './employees/employees.module';
import { LanguagesModule } from './languages/languages.module';
import { PersonsModule } from './persons/persons.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,NeighboorHoodModule,DashboardModule,CatalogsModule,BooksModule,AddressesModule,AuthorsModule,EmployeesModule,LanguagesModule,PersonsModule
  ]
})
export class ComponentsModule { }
