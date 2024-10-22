import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CreateAuthor } from 'src/app/contracts/Create/create-author';
import { CustomSpinnerService, SpinnerType } from 'src/app/services/common/custom-spinner.service';
import { CustomToastrService, ToastrPosition, ToastrType } from 'src/app/services/common/custom-toastr.service';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements AfterViewInit {

  constructor(private spinner:CustomSpinnerService,private toastr:CustomToastrService){}
  ngAfterViewInit(): void {
    this.spinner.showSpinner(SpinnerType.BallScale);
    this.toastr.showMessage("Yazarlar","",{
      position:ToastrPosition.TopRight,
      toastrType:ToastrType.Success
    })
  }
@ViewChild(ListComponent) listComponent:ListComponent
  createdAuthors(author:CreateAuthor){
 this.listComponent.getAuthors();
  }

}
