import { Injectable } from '@angular/core';
import { ListPerson } from 'src/app/contracts/List/list-person';
import { HttpClientService } from '../common/http-client.service';
import { Observable, firstValueFrom } from 'rxjs';
import { CreatePerson } from 'src/app/contracts/Create/create-person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient:HttpClientService) { }

  async read(successCallBack?:()=>void,errorCallBack?:(errorMessage:string)=>void):Promise<{data:ListPerson[],message:string,success:boolean,totalCount:number}>{
   const observableData:Observable<any> = this.httpClient.get<{data:ListPerson[],message:string,success:boolean,totalCount:number}>({controller:"book"});
   const promiseData:Promise<{data:ListPerson[],message:string,success:boolean,totalCount:number}> = await firstValueFrom(observableData)
   return await promiseData
   }



   create(person:CreatePerson,successCallBack?:any){
    this.httpClient.post({controller:"person"},person).subscribe(successCallBack)
   }
}
