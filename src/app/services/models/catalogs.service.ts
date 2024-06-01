import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client.service';
import { ListCatalogs } from 'src/app/contracts/List/list-catalogs';
import { Observable, firstValueFrom } from 'rxjs';
import { CreateCatalog } from 'src/app/contracts/Create/create-catalog';

@Injectable({
  providedIn: 'root'
})
export class CatalogsService {

  constructor(private httpClient:HttpClientService) { }

  async read(successCallBack?:()=>void,errorCallBack?:(errorMessage:string)=>void):Promise<{data:ListCatalogs[],message:string,success:boolean,totalCount:number}>{
   const observableData:Observable<any> = this.httpClient.get<{data:ListCatalogs[],message:string,success:boolean,totalCount:number}>({controller:"book"});
   const promiseData:Promise<{data:ListCatalogs[],message:string,success:boolean,totalCount:number}> = await firstValueFrom(observableData)
   return promiseData
   }



   create(catalog:CreateCatalog,successCallBack?:any){
    this.httpClient.post({controller:"catalog"},catalog).subscribe(successCallBack);
   }
}
