import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client.service';
import { ListBook } from 'src/app/contracts/List/list-book';
import { Observable, firstValueFrom } from 'rxjs';
import { CreateBook } from 'src/app/contracts/Create/create-book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient:HttpClientService) { }

  async read(successCallBack?:()=>void,errorCallBack?:(errorMessage:string)=>void):Promise<{data:ListBook[],message:string,success:boolean,totalCount:number}>{
   const observableData:Observable<any> = this.httpClient.get<{data:ListBook[],message:string,success:boolean,totalCount:number}>({controller:"book"});
   const promiseData:Promise<{data:ListBook[],message:string,success:boolean,totalCount:number}> = await firstValueFrom(observableData)
   return promiseData
   }



   create(book:CreateBook,successCallBack?:any){
    this.httpClient.post<CreateBook>({controller:"book"},book).subscribe(successCallBack);
   }
}
