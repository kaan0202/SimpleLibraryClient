import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { ListNeighboorHood } from 'src/app/contracts/List/list-neighboor-hood';
import { HttpClientService } from '../common/http-client.service';
import { CreateNeighboorHood } from 'src/app/contracts/Create/create-neighboor-hood';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NeighboorHoodService {

  constructor(private httpClient:HttpClientService) { }

  async read(page: number = 0, size:number = 5,successCallBack?:()=>void,errorCallBack?:any):Promise<{data:ListNeighboorHood[],message:string,success:boolean,totalCount:number}>{
   const observableData:Observable<any> = this.httpClient.get<{data:ListNeighboorHood[],message:string,success:boolean,totalCount:number}>({controller:"book"});
   const promiseData:Promise<{data:ListNeighboorHood[],message:string,success:boolean,totalCount:number}> = await firstValueFrom(observableData)
   return promiseData
   }



   create(neigh:CreateNeighboorHood,successCallBack?:()=> void,errorCallBack?:(errorMessage:string)=>void ){
    this.httpClient.post({controller:"neighboorHood"},neigh).subscribe(result => {
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
