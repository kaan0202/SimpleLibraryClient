import { Component, EventEmitter, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CreateLanguage } from 'src/app/contracts/Create/create-language';
import { ListLanguage } from 'src/app/contracts/List/list-language';
import { SpinnerType } from 'src/app/services/common/custom-spinner.service';
import { CustomToastrService } from 'src/app/services/common/custom-toastr.service';
import { LanguageService } from 'src/app/services/models/language.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent {

  constructor(  private spinner:NgxSpinnerService,private language:LanguageService,private toastr:CustomToastrService) {}
  @Output() createdLanguage:EventEmitter<CreateLanguage> = new EventEmitter();

  create(name:HTMLInputElement){
    this.spinner.getSpinner(SpinnerType.Timer);
  const create_Language:CreateLanguage =new CreateLanguage();
  create_Language.name=name.value;

  this.language.create(create_Language,()=>{
    this.spinner.getSpinner(SpinnerType.Timer)
 this.createdLanguage.emit(create_Language);

    },
    errorMessage => {
      // Hata durumunda çalışacak kod bloğu
      this.toastr.showMessage(errorMessage);
    }
  );
}
update(id:HTMLInputElement,name:HTMLInputElement){
  this.spinner.getSpinner(SpinnerType.Timer);
  const list_Language:ListLanguage = new ListLanguage();
  list_Language.id = parseInt(id.value);
  list_Language.name = name.value
  this.language.put(list_Language);
  const create_Language:CreateLanguage =new CreateLanguage();
  this.createdLanguage.emit(create_Language);
}
}
