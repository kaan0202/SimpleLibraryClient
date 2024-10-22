import { ListLanguage } from './../../contracts/List/list-language';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client.service';

import { Observable, first, firstValueFrom } from 'rxjs';
import { CreateLanguage } from 'src/app/contracts/Create/create-language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private httpClient:HttpClientService) { }

  async read(page: number = 0, size:number = 5,successCallBack?:()=>void,errorCallBack?:any):Promise<{data:ListLanguage[],totalCount:number, message:string,success:boolean,}>{
    const observableData:Observable<any>= this.httpClient.get<{data:ListLanguage[],totalCount:number,message: string,success:boolean}>({controller:"language",queryString:`page=${page}&size=${size} `});

     const promiseData:Promise<{data:ListLanguage[],totalCount:number,message: string,success:boolean}> = await firstValueFrom(observableData);
    return await promiseData;
   }



   create(language:CreateLanguage,successCallBack?:()=> void,errorCallBack?:(errorMessage:string)=>void ){
    this.httpClient.post({controller:"language"},language).subscribe(result => {
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

  put(language:ListLanguage,successCallBack?:()=> void,errorCallBack?:(errorMessage:string)=>void){

    this.httpClient.put({controller:"language"},language).subscribe(result => {
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


