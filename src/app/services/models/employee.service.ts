import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { ListEmployee } from 'src/app/contracts/List/list-employee';
import { HttpClientService } from '../common/http-client.service';
import { CreateEmployee } from 'src/app/contracts/Create/create-employee';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClientService) { }

  async read(page: number = 0, size:number = 5,successCallBack?:()=>void,errorCallBack?:any):Promise<{data:ListEmployee[],message:string,success:boolean,totalCount:number}>{
   const observableData:Observable<any> = this.httpClient.get<{data:ListEmployee[],message:string,success:boolean,totalCount:number}>({controller:"book"});
   const promiseData:Promise<{data:ListEmployee[],message:string,success:boolean,totalCount:number}> = await firstValueFrom(observableData)
   return promiseData
   }



   create(employee:CreateEmployee,successCallBack?:()=> void,errorCallBack?:(errorMessage:string)=>void ){
    this.httpClient.post({controller:"employee"},employee).subscribe(result => {
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
