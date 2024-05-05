import { AfterViewInit, Component } from '@angular/core';
import { CustomSpinnerService } from 'src/app/services/common/custom-spinner.service';
import { CustomToastrService } from 'src/app/services/common/custom-toastr.service';

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
    this.spinner.showSpinner();
    this.toastr.showMessage("Kataloglar")
  }

}
