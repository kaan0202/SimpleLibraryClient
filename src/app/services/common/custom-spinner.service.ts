import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class CustomSpinnerService {

  constructor(private spinner:NgxSpinnerService) {spinner.show() }


  showSpinner(spinnerType?:SpinnerType){
    let ngxSpinner = spinnerType ? spinnerType : SpinnerType.BallScale
    this.spinner.show(ngxSpinner);
    setTimeout(()=>{
      this.hideSpinner(ngxSpinner)
    },1500);

    }

    private hideSpinner(spinnerType:SpinnerType){
      this.spinner.hide(spinnerType);
    }
  }



export enum SpinnerType{
  Timer="timer",
  BallScale ="ball-scale",
  Pacman ="pacman",
  Fire = "fire",
  LineScale="line-scale"
}
