import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client.service';
import { ListAuthors } from 'src/app/contracts/List/list-authors';
import { Observable, firstValueFrom } from 'rxjs';
import { CreateAuthor } from 'src/app/contracts/Create/create-author';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private httpClient:HttpClientService) { }

 async read(page: number = 0, size:number = 5,successCallBack?:()=>void,errorCallBack?:any):Promise<{data:ListAuthors[],message:string,success:boolean,totalCount:number}>{

    const observableData:Observable<any>=this.httpClient.get<{data:ListAuthors[],message:string,success:boolean,totalCount:number}>({controller:"author"});
    const promiseData:Promise<{data:ListAuthors[],message:string,success:boolean,totalCount:number}> = await firstValueFrom(observableData)
    return  promiseData;
  }


  create(author:CreateAuthor,successCallBack?:()=> void,errorCallBack?:(errorMessage:string)=>void ){
    this.httpClient.post({controller:"author"},author).subscribe(result => {
      successCallBack();
    },(errorResponse:HttpErrorResponse) => {
      const _error:Array<{key:string,value:Array<string>}> =errorResponse.error;
      let message ="";
      _error.forEach((v,index) =>{
        v.value.forEach((_v,_index)=>{
          message+=`${_v}<br>`
        })
      })
      errorCallBack(message);
    })
}
}
