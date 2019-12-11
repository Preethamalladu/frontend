import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {


  private REST_API_SERVER = "http://localhost:3000/restaurant";
  private header = {"access-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVkZjA1NWQ2M2RjNjEyMmI0MGEzNDI1YiIsInJvbGUiOiJjdXN0b21lciJ9.cj7ZNndPT6hEQjUu2DQ9_baJxhpJSubPhilPxD3wkZ4"}
  constructor(private httpClient: HttpClient) {
      
   }
  
  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER,{headers:this.header});
  } 

  public sendSearchRequest(search){
    return this.httpClient.get(this.REST_API_SERVER+"/"+"search/"+search, {headers:this.header});
  }

  public getRestByid(id){
    return this.httpClient.get(this.REST_API_SERVER+"/"+id,{headers:this.header});
  }
}
