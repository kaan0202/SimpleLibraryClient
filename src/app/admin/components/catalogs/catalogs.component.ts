import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CustomSpinnerService, SpinnerType } from 'src/app/services/common/custom-spinner.service';
import { CustomToastrService } from 'src/app/services/common/custom-toastr.service';
import { ListComponent } from './list/list.component';
import { CreateCatalog } from 'src/app/contracts/Create/create-catalog';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.scss']
})
export class CatalogsComponent implements AfterViewInit {
  /**
   *
   */
  constructor(private toastr:CustomToastrService,private spinner:CustomSpinnerService) {


  }
  ngAfterViewInit(): void {
    this.spinner.showSpinner(SpinnerType.Pacman);
    this.toastr.showMessage("Kataloglar")
  }


  @ViewChild(ListComponent) list : ListComponent
  createdCatalogs(catalog:CreateCatalog){
    this.list.getCatalogs();
  }
}
