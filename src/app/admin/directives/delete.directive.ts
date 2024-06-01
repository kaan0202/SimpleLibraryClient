import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from './../../services/common/http-client.service';
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { CustomSpinnerService, SpinnerType } from 'src/app/services/common/custom-spinner.service';
import { DeleteDialogComponent, DeleteState } from '../dialogs/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CustomToastrService, ToastrType } from 'src/app/services/common/custom-toastr.service';
declare var $:any;
@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(private element:ElementRef,private httpService:HttpClientService,private spinner:CustomSpinnerService,public dialog: MatDialog,private toastr:CustomToastrService) { }

  @Input() controller:string;
  @Input() id:number;
  @Output() callback:EventEmitter<any> = new EventEmitter();

  @HostListener("click")

  async onClick(){
    this.openDialog(async ()=>{
      this.spinner.showSpinner(SpinnerType.Timer);
      const td=this.element.nativeElement;
     await  this.httpService.delete({controller:this.controller},this.id).subscribe(data=>{
      $(td.parentElement).animate({ opacity:0,left:"+=50",height:"toggle"},700,()=>{


      });

     },(errorResponse:HttpErrorResponse) => {

           this.toastr.showMessage("Ürün Silinemedi","Hata",{
            toastrType:ToastrType.Error
           })
     });

    })


   }
   openDialog(afterClosed:any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: DeleteState.Yes,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == DeleteState.Yes){
         afterClosed();
      }
    });
  }
}
