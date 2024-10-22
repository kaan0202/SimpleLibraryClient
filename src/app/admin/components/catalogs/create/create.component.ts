import { Component, EventEmitter, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CreateCatalog } from 'src/app/contracts/Create/create-catalog';
import { SpinnerType } from 'src/app/services/common/custom-spinner.service';
import { CustomToastrService } from 'src/app/services/common/custom-toastr.service';
import { CatalogsService } from 'src/app/services/models/catalogs.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  constructor(  private spinner:NgxSpinnerService,private catalog:CatalogsService,private toastr:CustomToastrService) {}
  @Output() createdCatalogs:EventEmitter<CreateCatalog> = new EventEmitter();

  create(catalog:HTMLInputElement){
    this.spinner.getSpinner(SpinnerType.Timer);
  const create_Catalogs:CreateCatalog =new CreateCatalog();
 create_Catalogs.catalogName=catalog.value;


  this.catalog.create(create_Catalogs,()=>{
    this.spinner.getSpinner(SpinnerType.Timer)
 this.createdCatalogs.emit(create_Catalogs);

    },
    errorMessage => {
      // Hata durumunda çalışacak kod bloğu
      this.toastr.showMessage(errorMessage);
    }
  )
}
}
