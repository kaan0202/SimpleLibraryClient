
import { AfterViewInit, Component } from '@angular/core';
import { CustomToastrService, ToastrPosition, ToastrType } from 'src/app/services/common/custom-toastr.service';
import { CustomSpinnerService, SpinnerType } from 'src/app/services/common/custom-spinner.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements AfterViewInit{

  constructor(private toastr:CustomToastrService,private spinner:CustomSpinnerService){

  }
  ngAfterViewInit(): void {
this.spinner.showSpinner(SpinnerType.Timer);
   this.toastr.showMessage("Adresler",null,{
    toastrType:ToastrType.Info

   })
  }


}
