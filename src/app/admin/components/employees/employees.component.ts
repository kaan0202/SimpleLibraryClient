import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CustomSpinnerService, SpinnerType } from 'src/app/services/common/custom-spinner.service';
import { CustomToastrService } from 'src/app/services/common/custom-toastr.service';
import { ListComponent } from './list/list.component';
import { CreateEmployee } from 'src/app/contracts/Create/create-employee';

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
   this.spinner.showSpinner(SpinnerType.LineScale);
   this.toastr.showMessage("Çalışanlar");
  }
  @ViewChild(ListComponent) listComponent:ListComponent
  createdEmployee(employee:CreateEmployee){
    this.listComponent.employees();
  }

}
