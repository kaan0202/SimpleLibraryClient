import { Component, EventEmitter, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CreateAuthor } from 'src/app/contracts/Create/create-author';
import { SpinnerType } from 'src/app/services/common/custom-spinner.service';
import { CustomToastrService } from 'src/app/services/common/custom-toastr.service';
import { AuthorsService } from 'src/app/services/models/authors.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  constructor(  private spinner:NgxSpinnerService,private author:AuthorsService,private toastr:CustomToastrService) {}
  @Output() createdAuthors:EventEmitter<CreateAuthor> = new EventEmitter();

  create(name:HTMLInputElement,surname:HTMLInputElement){
    this.spinner.getSpinner(SpinnerType.Timer);
  const create_Authors:CreateAuthor =new CreateAuthor();
 create_Authors.name=name.value;
 create_Authors.surname = surname.value;


  this.author.create(create_Authors,()=>{
    this.spinner.getSpinner(SpinnerType.Timer)
 this.createdAuthors.emit(create_Authors);

    },
    errorMessage => {
      // Hata durumunda çalışacak kod bloğu
      this.toastr.showMessage(errorMessage);
    }
  )
}
}
