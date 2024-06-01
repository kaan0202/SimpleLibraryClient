import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { ListEmployee } from 'src/app/contracts/List/list-employee';
import { HttpClientService } from '../common/http-client.service';
import { CreateEmployee } from 'src/app/contracts/Create/create-employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClientService) { }

  async read(successCallBack?:()=>void,errorCallBack?:(errorMessage:string)=>void):Promise<{data:ListEmployee[],message:string,success:boolean,totalCount:number}>{
   const observableData:Observable<any> = this.httpClient.get<{data:ListEmployee[],message:string,success:boolean,totalCount:number}>({controller:"book"});
   const promiseData:Promise<{data:ListEmployee[],message:string,success:boolean,totalCount:number}> = await firstValueFrom(observableData)
   return promiseData
   }



   create(employee:CreateEmployee,successCallBack?:any){
    this.httpClient.post({controller:"employee"},employee).subscribe(successCallBack);
   }
}
