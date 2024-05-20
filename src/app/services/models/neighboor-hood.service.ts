import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { ListNeighboorHood } from 'src/app/contracts/list-neighboor-hood';
import { HttpClientService } from '../common/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class NeighboorHoodService {

  constructor(private httpClient:HttpClientService) { }

  async read(successCallBack?:()=>void,errorCallBack?:(errorMessage:string)=>void):Promise<{data:ListNeighboorHood[],message:string,success:boolean}>{
   const observableData:Observable<any> = this.httpClient.get<{data:ListNeighboorHood[],message:string,success:boolean}>({controller:"book"});
   const promiseData:Promise<{data:ListNeighboorHood[],message:string,success:boolean}> = await firstValueFrom(observableData)
   return promiseData
   }
}
