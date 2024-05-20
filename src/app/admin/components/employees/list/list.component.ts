import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/services/models/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  displayedColumns: string[] = ['Id', 'Name', 'Surname','Salary','Status','Gender'];
  dataSource : MatTableDataSource<any>;
  employees:any;
  constructor(private employee : EmployeeService){}
getCatalogs(){
  this.employee.read().then(response => this.employees = response.data);
  this.dataSource = new MatTableDataSource<any>(this.employees)
}

}
