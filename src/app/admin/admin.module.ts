import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { DeleteDirective } from './directives/delete.directive';
import { DeleteDialogComponent } from './dialogs/delete-dialog/delete-dialog.component';





@NgModule({
  declarations: [






  ],
  imports: [
    CommonModule,LayoutModule
  ],
  exports:[
    LayoutModule
  ]

})
export class AdminModule { }
