import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {


  private REST_API_SERVER = "http://localhost:3000/restaurant";
  private MENU_SERVER = "http://localhost:3000/menu/restaurant"
  private header = {};
  constructor(private httpClient: HttpClient) {
      
   }
   getToken(){
    var localdata =  localStorage.getItem("token");
    this.header["access-token"] = localdata
  }
  
  public sendGetRequest(){
    this.getToken()
    return this.httpClient.get(this.REST_API_SERVER,{headers:this.header});
  } 

  public sendSearchRequest(search){
    this.getToken();
    return this.httpClient.get(this.REST_API_SERVER+"/"+"search/"+search, {headers:this.header});
  }

  public getRestByid(id){
    this.getToken()
    return this.httpClient.get(this.REST_API_SERVER+"/"+id,{headers:this.header});
  }

  public getMenubyRestId(id){
    this.getToken()
    return this.httpClient.get(this.MENU_SERVER+"/"+id,{headers:this.header} );
  }
}
