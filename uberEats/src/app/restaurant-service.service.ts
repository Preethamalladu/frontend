import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {


  private REST_API_SERVER = "http://localhost:3000/restaurant";
  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER,{headers:{"api-key":"54asdkj1209nksnda"}});
  } 

  public sendSearchRequest(search){
    return this.httpClient.get(this.REST_API_SERVER+"/"+"search/"+search, {headers:{"api-key":"54asdkj1209nksnda"}});
  }

  public getRestByid(id){
    return this.httpClient.get(this.REST_API_SERVER+"/"+id,{headers:{"api-key":"54asdkj1209nksnda"}});
  }
}
