import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CreatePerson } from 'src/app/contracts/Create/create-person';
import { ListNeighboorHood } from 'src/app/contracts/List/list-neighboor-hood';
import { SpinnerType } from 'src/app/services/common/custom-spinner.service';
import { CustomToastrService } from 'src/app/services/common/custom-toastr.service';
import { NeighboorHoodService } from 'src/app/services/models/neighboor-hood.service';
import { PersonService } from 'src/app/services/models/person.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements AfterViewInit {
  constructor(private neigh:NeighboorHoodService,  private spinner:NgxSpinnerService,private person:PersonService,private toastr:CustomToastrService) {}
  ngAfterViewInit(): void {
this.listNeigh();
  }
  @Output() createdPerson:EventEmitter<CreatePerson> = new EventEmitter();
neighName:string;
neighData:ListNeighboorHood[];
  create(address:string,name:HTMLInputElement,surname:HTMLInputElement,email:HTMLInputElement,password:HTMLInputElement){
    this.spinner.getSpinner(SpinnerType.Timer);
  const create_Person:CreatePerson =new CreatePerson();
 create_Person.name=name.value;
 create_Person.surname = surname.value;
 create_Person.addressId = Number.parseInt(address);
 create_Person.email = email.value;
 create_Person.password = password.value;



  this.person.create(create_Person,()=>{
    this.spinner.getSpinner(SpinnerType.Timer)
 this.createdPerson.emit(create_Person);

    },
    errorMessage => {
      // Hata durumunda çalışacak kod bloğu
      this.toastr.showMessage(errorMessage);
    }
  )
}
async listNeigh(){
  const allNeigh:{data:ListNeighboorHood[],message:string,success:boolean,totalCount:number} =  await this.neigh.read(0,5);
  this.neighData = allNeigh.data;
}
}
