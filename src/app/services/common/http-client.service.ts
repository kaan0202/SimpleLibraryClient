import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient,@Inject("baseUrl") private baseUrl:string) {}

   private url(requestParameter:RequestParameters):string{
    return `${requestParameter.baseUrl ? requestParameter.baseUrl : this.baseUrl}/${requestParameter.controller}${requestParameter.action ? `/${requestParameter.action}` : ""}`
   }

   get<T>(requestParamaters:RequestParameters,id?:number){
    let url:string = "";
    if(requestParamaters.fullEndPoint)
      url = requestParamaters.fullEndPoint
      else
      url = `${this.url(requestParamaters)}${id ? `/${id}` : ""}`
    return this.httpClient.get(url,{headers:requestParamaters.headers});
}
   post<T>(requestParamaters:RequestParameters,body:T){
    let url:string ="";
    if(requestParamaters.fullEndPoint)
      url = requestParamaters.fullEndPoint
    else
    url=this.url(requestParamaters)

    return this.httpClient.post<T>(url,body,{headers:requestParamaters.headers})
   }

   put<T>(requestParameters:RequestParameters,body:T){
    let url:string = "";
    if(requestParameters.fullEndPoint)
      url = requestParameters.fullEndPoint
    else
    url = this.url(requestParameters)

    return this.httpClient.put<T>(url,body,{headers:requestParameters.headers})
   }

   delete<T>(requestParameters:RequestParameters,id?:number){
    let url:string = "";
    if(requestParameters.fullEndPoint)
      url = requestParameters.fullEndPoint

    else
     url= `${this.url(requestParameters)}${id ? `/${id}` : ""}`

     return this.httpClient.delete(url,{headers:requestParameters.headers})
   }





}



export class RequestParameters {
  controller?: string;
  action?: string;
  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string;
}
