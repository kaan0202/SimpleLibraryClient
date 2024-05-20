import { Injectable } from '@angular/core';
import { ListPerson } from 'src/app/contracts/list-person';
import { HttpClientService } from '../common/http-client.service';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient:HttpClientService) { }

  async read(successCallBack?:()=>void,errorCallBack?:(errorMessage:string)=>void):Promise<{data:ListPerson[],message:string,success:boolean}>{
   const observableData:Observable<any> = this.httpClient.get<{data:ListPerson[],message:string,success:boolean}>({controller:"book"});
   const promiseData:Promise<{data:ListPerson[],message:string,success:boolean}> = await firstValueFrom(observableData)
   return promiseData
   }
}
