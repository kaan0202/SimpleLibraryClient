import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client.service';
import { ListAuthors } from 'src/app/contracts/List/list-authors';
import { Observable, firstValueFrom } from 'rxjs';
import { CreateAuthor } from 'src/app/contracts/Create/create-author';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private httpClient:HttpClientService) { }

 async read():Promise<{data:ListAuthors[],message:string,success:boolean,totalCount:number}>{

    const observableData:Observable<any>=this.httpClient.get<{data:ListAuthors[],message:string,success:boolean,totalCount:number}>({controller:"author"});
    const promiseData:Promise<{data:ListAuthors[],message:string,success:boolean,totalCount:number}> = await firstValueFrom(observableData)
    return  promiseData;
  }


   create(author:CreateAuthor,successCallBack?:any){
    this.httpClient.post({controller:"author"},author).subscribe(successCallBack);
   }
}
