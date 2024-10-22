import { ListAddresses } from './../../../../contracts/List/list-addresses';
import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddressService } from 'src/app/services/models/address.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  displayedColumns: string[] = ['Id', 'AddressTitle', 'Description', 'OpenAddress','PhoneNumber','PersonName','NeighboorHood',"menus"];
  dataSource : MatTableDataSource<any>;
  addresses:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private address:AddressService){this.getAddress()}

  async getAddress(){
   const allAddress:{data:ListAddresses[],totalCount:number,message: string,success:boolean} = await this.address.read(this.paginator?this.paginator.pageIndex:0,this.paginator?this.paginator.pageSize:5);

 this.dataSource = new MatTableDataSource<any>(allAddress.data);
this.paginator.length =allAddress.totalCount
}

async pageChanged(){
  await this.getAddress;
}

}
