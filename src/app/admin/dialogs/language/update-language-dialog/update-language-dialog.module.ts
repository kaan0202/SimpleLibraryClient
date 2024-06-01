import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateLanguageDialogComponent } from './update-language-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [UpdateLanguageDialogComponent],
  imports: [
    CommonModule,MatFormFieldModule,MatDialogModule
  ]
})
export class UpdateLanguageDialogModule { }
