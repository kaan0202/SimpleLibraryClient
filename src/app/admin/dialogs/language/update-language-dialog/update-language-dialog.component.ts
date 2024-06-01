import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-language-dialog',
  templateUrl: './update-language-dialog.component.html',
  styleUrls: ['./update-language-dialog.component.scss']
})
export class UpdateLanguageDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UpdateLanguageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UpdateState,
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
export enum UpdateState{
  Yes,
  No

}


