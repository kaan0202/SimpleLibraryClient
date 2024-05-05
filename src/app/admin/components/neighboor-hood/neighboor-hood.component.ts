import { AfterViewInit, Component } from '@angular/core';
import { CustomSpinnerService } from 'src/app/services/common/custom-spinner.service';
import { CustomToastrService } from 'src/app/services/common/custom-toastr.service';

@Component({
  selector: 'app-neighboor-hood',
  templateUrl: './neighboor-hood.component.html',
  styleUrls: ['./neighboor-hood.component.scss']
})
export class NeighboorHoodComponent implements AfterViewInit {

  constructor(private toastr:CustomToastrService,private spinner:CustomSpinnerService) {


  }
  ngAfterViewInit(): void {
    this.spinner.showSpinner();
    this.toastr.showMessage("Mahalleler");
  }

}
