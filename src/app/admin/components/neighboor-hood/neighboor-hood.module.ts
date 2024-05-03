import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeighboorHoodComponent } from './neighboor-hood.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NeighboorHoodComponent],
  imports: [
    CommonModule,RouterModule.forChild([{path:"",component:NeighboorHoodComponent}])
  ]
})
export class NeighboorHoodModule { }
