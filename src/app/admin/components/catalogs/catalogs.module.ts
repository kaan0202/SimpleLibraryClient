import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogsComponent } from './catalogs.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CatalogsComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild([{path:"",component:CatalogsComponent}])
  ]
})
export class CatalogsModule { }
