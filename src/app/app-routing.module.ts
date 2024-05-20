import { NeighboorHoodModule } from './admin/components/neighboor-hood/neighboor-hood.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';

const routes: Routes = [
  {path:"admin",component:LayoutComponent,children:[
    {path:"",component:DashboardComponent},
    {path:"books",loadChildren: ()=>import("./admin/components/books/books.module").then(m =>m.BooksModule)},
    {path:"addresses",loadChildren: ()=>import("./admin/components/addresses/addresses.module").then(m =>m.AddressesModule)},
    {path:"authors",loadChildren: ()=>import("./admin/components/authors/authors.module").then(m =>m.AuthorsModule)},
    {path:"catalogs",loadChildren: ()=>import("./admin/components/catalogs/catalogs.module").then(m =>m.CatalogsModule)},
    {path:"employees",loadChildren: ()=>import("./admin/components/employees/employees.module").then(m =>m.EmployeesModule)},
    {path:"neighboorHood",loadChildren: ()=>import("./admin/components/neighboor-hood/neighboor-hood.module").then(m =>m.NeighboorHoodModule)},
    {path:"persons",loadChildren: ()=>import("./admin/components/persons/persons.module").then(m =>m.PersonsModule)},

    {path:"languages",loadChildren: ()=>import("./admin/components/languages/languages.module").then(m =>m.LanguagesModule)},
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
