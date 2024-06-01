import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { ListAddresses } from 'src/app/contracts/List/list-addresses';
import { HttpClientService } from '../common/http-client.service';
import { CreateAddress } from 'src/app/contracts/Create/create-address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
constructor(private httpClient:HttpClientService){}
  async read():Promise<{data:ListAddresses[],message:string,success:boolean,totalCount:number}>{

    const observableData:Observable<any>=this.httpClient.get<{data:ListAddresses[],message:string,success:boolean,totalCount:number}>({controller:"address"});
    const promiseData:Promise<{data:ListAddresses[],message:string,success:boolean,totalCount:number}> = await firstValueFrom(observableData)
    return  promiseData;
  }



  create(address:CreateAddress,successCallBack?:any){
    this.httpClient.post({controller:"address"},address).subscribe(successCallBack);
  }
}
