import { ListCatalogs } from './../../../../contracts/List/list-catalogs';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListEmployee } from 'src/app/contracts/List/list-employee';
import { CatalogsService } from 'src/app/services/models/catalogs.service';
import { EmployeeService } from 'src/app/services/models/employee.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  displayedColumns: string[] = ['Id', 'Name', 'Surname','Salary','Status','Gender',"menus"];
  dataSource : MatTableDataSource<any>;
  employees:any;
  constructor(private employee : EmployeeService){}
  @ViewChild(MatPaginator) paginator:MatPaginator
 async getEmployee(){
 const allEmployee:{data:ListEmployee[],message:string,success:boolean,totalCount:number} =  await this.employee.read(this.paginator?this.paginator.pageIndex:0,this.paginator?this.paginator.pageSize:5);
  this.dataSource = new MatTableDataSource<any>(allEmployee.data)
  this.paginator.length = allEmployee.totalCount;

}
 async pageChanged(){
await this.employee;
}

}
