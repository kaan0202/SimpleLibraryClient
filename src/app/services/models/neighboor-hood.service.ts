import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { ListNeighboorHood } from 'src/app/contracts/List/list-neighboor-hood';
import { HttpClientService } from '../common/http-client.service';
import { CreateNeighboorHood } from 'src/app/contracts/Create/create-neighboor-hood';

@Injectable({
  providedIn: 'root'
})
export class NeighboorHoodService {

  constructor(private httpClient:HttpClientService) { }

  async read(successCallBack?:()=>void,errorCallBack?:(errorMessage:string)=>void):Promise<{data:ListNeighboorHood[],message:string,success:boolean,totalCount:number}>{
   const observableData:Observable<any> = this.httpClient.get<{data:ListNeighboorHood[],message:string,success:boolean,totalCount:number}>({controller:"book"});
   const promiseData:Promise<{data:ListNeighboorHood[],message:string,success:boolean,totalCount:number}> = await firstValueFrom(observableData)
   return promiseData
   }



   create(neigh:CreateNeighboorHood,successCallBack?:any){
    this.httpClient.post({controller:"neighboorHood"},neigh).subscribe(successCallBack);
   }
}
