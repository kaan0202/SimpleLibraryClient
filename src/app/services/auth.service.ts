import { inject, Injectable } from '@angular/core';
import { HttpClientService } from './common/http-client.service';
import { UserLogin } from '../contracts/login/user-login';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClientService) { }

  async login(user:UserLogin,successCallBack?:()=> void,errorCallBack?:(message:string)=> void){
    this.http.post<UserLogin>({action:"login",controller:"User"},user).subscribe(result =>{
      successCallBack();
    },(error:HttpErrorResponse)=>{
      const _error:Array<{key:string,value:Array<string>}> =error.error;
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
