import { Injectable } from '@angular/core';
import { ListPerson } from 'src/app/contracts/List/list-person';
import { HttpClientService } from '../common/http-client.service';
import { Observable, firstValueFrom } from 'rxjs';
import { CreatePerson } from 'src/app/contracts/Create/create-person';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient:HttpClientService) { }

  async read(page: number = 0, size:number = 5,successCallBack?:()=>void,errorCallBack?:any):Promise<{data:ListPerson[],message:string,success:boolean,totalCount:number}>{
   const observableData:Observable<any> = this.httpClient.get<{data:ListPerson[],message:string,success:boolean,totalCount:number}>({controller:"book"});
   const promiseData:Promise<{data:ListPerson[],message:string,success:boolean,totalCount:number}> = await firstValueFrom(observableData)
   return await promiseData
   }



   create(person:CreatePerson,successCallBack?:()=> void,errorCallBack?:(errorMessage:string)=>void ){
    this.httpClient.post({controller:"person"},person).subscribe(result => {
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
