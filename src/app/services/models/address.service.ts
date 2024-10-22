import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { ListAddresses } from 'src/app/contracts/List/list-addresses';
import { HttpClientService } from '../common/http-client.service';
import { CreateAddress } from 'src/app/contracts/Create/create-address';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
constructor(private httpClient:HttpClientService){}
  async read(page: number = 0, size:number = 5,successCallBack?:()=>void,errorCallBack?:any):Promise<{data:ListAddresses[],message:string,success:boolean,totalCount:number}>{

    const observableData:Observable<any>=this.httpClient.get<{data:ListAddresses[],message:string,success:boolean,totalCount:number}>({controller:"address"});
    const promiseData:Promise<{data:ListAddresses[],message:string,success:boolean,totalCount:number}> = await firstValueFrom(observableData)
    return  promiseData;
  }



  create(address:CreateAddress,successCallBack?:()=> void,errorCallBack?:(errorMessage:string)=>void ){
    this.httpClient.post({controller:"address"},address).subscribe(result => {
      successCallBack();
    },(errorResponse:HttpErrorResponse) => {
      const _error:Array<{key:string,value:Array<string>}> =errorResponse.error;
      let message ="";
      _error.forEach((v,index) =>{
        v.value.forEach((_v,_index)=>{
          message+=`${_v}<br>`
        })
      })
      errorCallBack(message);
    })
}
}
