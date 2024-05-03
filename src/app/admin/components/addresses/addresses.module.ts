import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressesComponent } from './addresses.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddressesComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild([{path:"",component:AddressesComponent}])
  ]
})
export class AddressesModule { }
