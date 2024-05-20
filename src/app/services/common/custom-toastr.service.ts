
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr:ToastrService) {}
  showMessage(message:string,title?:string, toastrOptions?:Partial<ToastrOptions>): void{




    let titleMessage:string = title ? title : "Uyarı";
    let messageType = toastrOptions?.toastrType ? toastrOptions?.toastrType : ToastrType.Warning;
    let position = toastrOptions?.position ? toastrOptions?.position : ToastrPosition.TopRight;
    this.toastr[messageType](message,titleMessage,{positionClass:position});
  }

}

export class ToastrOptions{
  toastrType:ToastrType;
  position:ToastrPosition;

}

export enum ToastrType{
  Info = "info",
  Error = "error",
  Warning = "warning",
  Success = "success",
  Show = "show"

}
export enum ToastrPosition{
  TopRight="toast-top-right",
  BottomRight="toast-bottom-right",
  TopLeft="toast-top-left",
  BottomLeft="toast-bottom-left",
  BottomCenter="toast-bottom-center",
  TopCenter="toast-top-center",
  TopFullWidth="toast-top-full-width",
  BottomFullWidth="toast-bottom-full-width"
}


