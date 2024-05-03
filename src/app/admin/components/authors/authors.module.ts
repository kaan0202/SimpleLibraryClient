import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './authors.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AuthorsComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild([{path:"",component:AuthorsComponent}])
  ]
})
export class AuthorsModule { }
