import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client.service';
import { ListBook } from 'src/app/contracts/list-book';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient:HttpClientService) { }

  async read(successCallBack?:()=>void,errorCallBack?:(errorMessage:string)=>void):Promise<{data:ListBook[],message:string,success:boolean}>{
   const observableData:Observable<any> = this.httpClient.get<{data:ListBook[],message:string,success:boolean}>({controller:"book"});
   const promiseData:Promise<{data:ListBook[],message:string,success:boolean}> = await firstValueFrom(observableData)
   return promiseData
   }
}
