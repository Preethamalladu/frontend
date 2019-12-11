import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {
  private REST_API_SERVER = "http://localhost:3000/";
  constructor(private httpClient: HttpClient) { }
    public sendGetRequest(){
      return this.httpClient.get(this.REST_API_SERVER+"orders",{headers:{"api-key":"54asdkj1209nksnda"}});
    } 
  
    public sendSearchRequest(search){
      return this.httpClient.get(this.REST_API_SERVER+"/"+"search/"+search, {headers:{"api-key":"54asdkj1209nksnda"}});
    }
  
    public getRestByid(id){
      return this.httpClient.get(this.REST_API_SERVER+"/"+id,{headers:{"api-key":"54asdkj1209nksnda"}});
    }
    public getOrdersByUserId(userId){
      console.log(this.REST_API_SERVER+"userorders/"+userId);
      return this.httpClient.get(this.REST_API_SERVER+"userorders/"+userId,
      {headers:{"api-key":"54asdkj1209nksnda"}});

    }
   
    public createorder(body:any){
      // console.log(this.REST_API_SERVER+"userorders/"+userId);
      return this.httpClient.post(this.REST_API_SERVER+"orders",body,
      {headers:{"api-key":"54asdkj1209nksnda"}});

    }
    


  
}
