import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CustomSpinnerService, SpinnerType } from 'src/app/services/common/custom-spinner.service';
import { CustomToastrService } from 'src/app/services/common/custom-toastr.service';
import { ListComponent } from './list/list.component';
import { CreateNeighboorHood } from 'src/app/contracts/Create/create-neighboor-hood';

@Component({
  selector: 'app-neighboor-hood',
  templateUrl: './neighboor-hood.component.html',
  styleUrls: ['./neighboor-hood.component.scss']
})
export class NeighboorHoodComponent implements AfterViewInit {

  constructor(private toastr:CustomToastrService,private spinner:CustomSpinnerService) {


  }
  ngAfterViewInit(): void {
    this.spinner.showSpinner(SpinnerType.Timer);
    this.toastr.showMessage("Mahalleler");
  }
@ViewChild(ListComponent) list:ListComponent
createdNeigh(name:CreateNeighboorHood){
  this.list.getNeighboors();
}
}
