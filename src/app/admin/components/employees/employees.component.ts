import { AfterViewInit, Component } from '@angular/core';
import { CustomSpinnerService } from 'src/app/services/common/custom-spinner.service';
import { CustomToastrService } from 'src/app/services/common/custom-toastr.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements AfterViewInit {
  /**
   *
   */
  constructor(private toastr:CustomToastrService,private spinner:CustomSpinnerService) {


  }
  ngAfterViewInit(): void {
   this.spinner.showSpinner();
   this.toastr.showMessage("Çalışanlar");
  }

}
