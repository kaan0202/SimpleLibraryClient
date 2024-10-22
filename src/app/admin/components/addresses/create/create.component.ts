import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CreateAddress } from 'src/app/contracts/Create/create-address';
import { ListAddresses } from 'src/app/contracts/List/list-addresses';
import { ListNeighboorHood } from 'src/app/contracts/List/list-neighboor-hood';
import { ListPerson } from 'src/app/contracts/List/list-person';
import { SpinnerType } from 'src/app/services/common/custom-spinner.service';
import { CustomToastrService } from 'src/app/services/common/custom-toastr.service';
import { AddressService } from 'src/app/services/models/address.service';
import { NeighboorHoodService } from 'src/app/services/models/neighboor-hood.service';
import { PersonService } from 'src/app/services/models/person.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

constructor(private spinner:NgxSpinnerService,private address:AddressService,private toastr:CustomToastrService,private neigh:NeighboorHoodService,private person:PersonService) {this.listPersons();}
neight:ListNeighboorHood[];
personData:ListPerson[];
personName:string
neightName:string;


 async getNeighValues(){

   const datas :{data:ListNeighboorHood[],totalCount:number,message: string,success:boolean} = await this.neigh.read(0,5);
this.neight = datas.data
  }
  @Output() createdAddress:EventEmitter<CreateAddress> = new EventEmitter();

  create(person:string,neighboor:string,title:HTMLInputElement,description:HTMLInputElement,openAddress:HTMLTextAreaElement,phoneNumber:HTMLInputElement){
    this.spinner.getSpinner(SpinnerType.Timer);
  const create_Address:CreateAddress =new CreateAddress();
 create_Address.addressTitle=title.value;
 create_Address.description = description.value;
 create_Address.openAddress = openAddress.value;
 create_Address.phoneNumber = phoneNumber.value;

create_Address.neighboorHoodId;
  this.address.create(create_Address,()=>{
    this.spinner.getSpinner(SpinnerType.Timer)
 this.createdAddress.emit(create_Address);

    },
  )
}

  async listPersons(){
  const allPersons:{data:ListPerson[],message:string,success:boolean,totalCount:number} =  await this.person.read(0,5);
  this.personData =allPersons.data
}
}
