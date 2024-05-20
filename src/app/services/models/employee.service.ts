import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { ListEmployee } from 'src/app/contracts/list-employee';
import { HttpClientService } from '../common/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClientService) { }

  async read(successCallBack?:()=>void,errorCallBack?:(errorMessage:string)=>void):Promise<{data:ListEmployee[],message:string,success:boolean}>{
   const observableData:Observable<any> = this.httpClient.get<{data:ListEmployee[],message:string,success:boolean}>({controller:"book"});
   const promiseData:Promise<{data:ListEmployee[],message:string,success:boolean}> = await firstValueFrom(observableData)
   return promiseData
   }
}
