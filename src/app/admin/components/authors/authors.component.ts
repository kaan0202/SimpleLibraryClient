import { AfterViewInit, Component } from '@angular/core';
import { CustomSpinnerService, SpinnerType } from 'src/app/services/common/custom-spinner.service';
import { CustomToastrService, ToastrPosition, ToastrType } from 'src/app/services/common/custom-toastr.service';

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

}
