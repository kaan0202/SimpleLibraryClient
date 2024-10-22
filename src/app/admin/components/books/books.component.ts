
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CustomSpinnerService, SpinnerType } from 'src/app/services/common/custom-spinner.service';
import { CustomToastrService, ToastrPosition, ToastrType } from 'src/app/services/common/custom-toastr.service';
import { ListComponent } from './list/list.component';
import { CreateBook } from 'src/app/contracts/Create/create-book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements AfterViewInit {


  constructor(private toastr:CustomToastrService,private spinner:CustomSpinnerService) {


  }
  ngAfterViewInit(): void {
   this.spinner.showSpinner(SpinnerType.LineScale);
   this.toastr.showMessage("Kitaplar",null,{
    position:ToastrPosition.TopRight,
    toastrType:ToastrType.Info
   })
  }
  @ViewChild(ListComponent) listComponent:ListComponent
  createdBooks(book:CreateBook){
    this.listComponent.getallBooks();
  }

}
