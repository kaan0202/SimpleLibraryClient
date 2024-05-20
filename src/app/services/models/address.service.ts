import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { ListAddresses } from 'src/app/contracts/list-addresses';
import { HttpClientService } from '../common/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
constructor(private httpClient:HttpClientService){}
  async read():Promise<{data:ListAddresses[],message:string,success:boolean}>{

    const observableData:Observable<any>=this.httpClient.get<{data:ListAddresses[],message:string,success:boolean}>({controller:"author"});
    const promiseData:Promise<{data:ListAddresses[],message:string,success:boolean}> = await firstValueFrom(observableData)
    return  promiseData;
  }
}
