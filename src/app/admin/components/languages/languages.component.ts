import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CustomSpinnerService, SpinnerType } from 'src/app/services/common/custom-spinner.service';
import { CustomToastrService } from 'src/app/services/common/custom-toastr.service';
import { ListComponent } from './list/list.component';
import { CreateLanguage } from 'src/app/contracts/Create/create-language';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements AfterViewInit {

  /**
   *
   */
  @ViewChild(ListComponent) listComponents:ListComponent
  constructor(private toastr:CustomToastrService,private spinner:CustomSpinnerService) {


  }
  createdLanguage(language:CreateLanguage){
    this.listComponents.getLanguages();
   }
  ngAfterViewInit(): void {


    this.spinner.showSpinner(SpinnerType.BallScale);
    this.toastr.showMessage("Diller");
  }

}
