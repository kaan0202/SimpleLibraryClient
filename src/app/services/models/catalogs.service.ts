import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client.service';
import { ListCatalogs } from 'src/app/contracts/list-catalogs';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogsService {

  constructor(private httpClient:HttpClientService) { }

  async read(successCallBack?:()=>void,errorCallBack?:(errorMessage:string)=>void):Promise<{data:ListCatalogs[],message:string,success:boolean}>{
   const observableData:Observable<any> = this.httpClient.get<{data:ListCatalogs[],message:string,success:boolean}>({controller:"book"});
   const promiseData:Promise<{data:ListCatalogs[],message:string,success:boolean}> = await firstValueFrom(observableData)
   return promiseData
   }
}
