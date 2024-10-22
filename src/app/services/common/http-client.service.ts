import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient,@Inject("baseUrl") private baseUrl:string) {}

   private url(requestParameter:RequestParameters):string{
    return `${requestParameter.baseUrl ? requestParameter.baseUrl : this.baseUrl}/${requestParameter.controller}${requestParameter.action ? `/${requestParameter.action}` : ""}`
   }

   get<T>(requestParameter: RequestParameters, id?: string): Observable<T> {
    let url: string = "";
    if (requestParameter.fullEndPoint) {
      url = requestParameter.fullEndPoint;
    } else {
      url = `${this.url(requestParameter)}${id ? `/${id}` : ''}${requestParameter.queryString?`?${requestParameter.queryString}`: ""}`;
    }
    return this.httpClient.get<T>(url, { headers: requestParameter.headers });
  }

  post<T>(requestParameter: RequestParameters, body: T): Observable<T> {
    let url: string = "";
    if (requestParameter.fullEndPoint) {
      url = requestParameter.fullEndPoint;
    } else {
      url = `${this.url(requestParameter)}${requestParameter.queryString?`?${requestParameter.queryString}`: ""}`;
    }
    return this.httpClient.post<T>(url, body, { headers: requestParameter.headers });
  }

  put<T>(requestParameter: RequestParameters, body: T): Observable<T> {
    let url: string = "";
    if (requestParameter.fullEndPoint) {
      url = requestParameter.fullEndPoint;
    } else {
      url = `${this.url(requestParameter)}`;
    }
    return this.httpClient.put<T>(url, body, { headers: requestParameter.headers });
  }

  delete<T>(requestParameter: RequestParameters, id?: number): Observable<T> {
    let url: string = "";
    if (requestParameter.fullEndPoint) {
      url = requestParameter.fullEndPoint;
    } else {
      url = `${this.url(requestParameter)}${id ? `/${id}` : ''}${requestParameter.queryString?`?${requestParameter.queryString}`: ""}`;
    }
    return this.httpClient.delete<T>(url);
  }
}








export class RequestParameters {
  controller?: string;
  action?: string;
  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string;
  queryString?:string;
}
