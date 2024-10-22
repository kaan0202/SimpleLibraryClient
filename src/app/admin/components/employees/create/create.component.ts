import { Component, EventEmitter, Output } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CreateEmployee } from 'src/app/contracts/Create/create-employee';
import { SpinnerType } from 'src/app/services/common/custom-spinner.service';
import { CustomToastrService } from 'src/app/services/common/custom-toastr.service';
import { EmployeeService } from 'src/app/services/models/employee.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  constructor(  private spinner:NgxSpinnerService,private employee:EmployeeService,private toastr:CustomToastrService) {}
  @Output() createdEmployee:EventEmitter<CreateEmployee> = new EventEmitter();

  create(name:HTMLInputElement,surname:HTMLInputElement,salary:HTMLInputElement,status:MatOption){
    this.spinner.getSpinner(SpinnerType.Timer);
  const create_Employee:CreateEmployee =new CreateEmployee();
create_Employee.name = name.value
create_Employee.surname = name.value
create_Employee.salary = Number.parseInt(salary.value)
create_Employee.status = Boolean(status.value)

  this.employee.create(create_Employee,()=>{
    this.spinner.getSpinner(SpinnerType.Timer)
 this.createdEmployee.emit(create_Employee);

    },
    errorMessage => {
      // Hata durumunda çalışacak kod bloğu
      this.toastr.showMessage(errorMessage);
    }
  )
}
}
