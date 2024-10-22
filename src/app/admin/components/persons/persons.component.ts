import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CustomSpinnerService, SpinnerType } from 'src/app/services/common/custom-spinner.service';
import { CustomToastrService } from 'src/app/services/common/custom-toastr.service';
import { ListComponent } from './list/list.component';
import { CreatePerson } from 'src/app/contracts/Create/create-person';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements AfterViewInit {

  constructor(private toastr:CustomToastrService,private spinner:CustomSpinnerService) {


  }
  ngAfterViewInit(): void {
    this.spinner.showSpinner(SpinnerType.Fire);
    this.toastr.showMessage("Üyeler");
  }
@ViewChild(ListComponent) list:ListComponent
createdPersons(person:CreatePerson){
  this.list.getPersons();
}
}
