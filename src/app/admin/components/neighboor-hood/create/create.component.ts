import { Component, EventEmitter, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CreateNeighboorHood } from 'src/app/contracts/Create/create-neighboor-hood';
import { SpinnerType } from 'src/app/services/common/custom-spinner.service';
import { CustomToastrService } from 'src/app/services/common/custom-toastr.service';
import { NeighboorHoodService } from 'src/app/services/models/neighboor-hood.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  constructor(  private spinner:NgxSpinnerService,private neigh:NeighboorHoodService,private toastr:CustomToastrService) {}
  @Output() createdNeigh:EventEmitter<CreateNeighboorHood> = new EventEmitter();

  create(name:HTMLInputElement){
    this.spinner.getSpinner(SpinnerType.Timer);
  const create_Neigh:CreateNeighboorHood =new CreateNeighboorHood();
 create_Neigh.name=name.value;



  this.neigh.create(create_Neigh,()=>{
    this.spinner.getSpinner(SpinnerType.Timer)
 this.createdNeigh.emit(create_Neigh);

    },

  )
}
}
