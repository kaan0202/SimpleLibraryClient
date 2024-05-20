import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client.service';
import { ListAuthors } from 'src/app/contracts/list-authors';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private httpClient:HttpClientService) { }

 async read():Promise<{data:ListAuthors[],message:string,success:boolean}>{

    const observableData:Observable<any>=this.httpClient.get<{data:ListAuthors[],message:string,success:boolean}>({controller:"author"});
    const promiseData:Promise<{data:ListAuthors[],message:string,success:boolean}> = await firstValueFrom(observableData)
    return  promiseData;
  }
}
