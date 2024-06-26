import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [DeleteDialogComponent],
  imports: [
    CommonModule,MatButtonModule,MatDialogModule
  ],
})
export class DialogModule { }
