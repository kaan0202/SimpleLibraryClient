import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [DeleteDialogComponent],
  imports: [
    CommonModule,MatButtonModule,MatDialogModule,FormsModule,MatInputModule
  ],
})
export class DialogModule { }
