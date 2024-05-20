import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AddressService } from 'src/app/services/models/address.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  displayedColumns: string[] = ['Id', 'AddressTitle', 'Description', 'OpenAddress','PhoneNumber','PersonName','NeighboorHood'];
  dataSource : MatTableDataSource<any>;
  addresses:any;
  constructor(private address:AddressService){this.getAddress()}

  async getAddress(){
    await this.address.read().then(response =>this.addresses = response.data)

 this.dataSource = new MatTableDataSource<any>(this.addresses);
  }



}
