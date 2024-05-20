import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client.service';
import { ListLanguage } from 'src/app/contracts/list-language';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private httpClient:HttpClientService) { }

  async read(successCallBack?:()=>void,errorCallBack?:(errorMessage:string)=>void):Promise<{data:ListLanguage[], message:string,success:boolean}>{
    const observableData: Observable<any> = this.httpClient.get<{data:ListLanguage[],message: string,success:boolean}>({controller:"language"});


        const promiseData:Promise<{data:ListLanguage[],message:string,success:boolean}> = await firstValueFrom(observableData);

        return promiseData;
    }
   }


