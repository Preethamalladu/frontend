import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantAdminService {
  private RESTAURANT_API_SERVER = "http://localhost:3000/restaurant";
  private MENU_API_SERVER = "http://localhost:3000/menu";
  private ORDER_API_SERVER = "http://localhost:3000/orders";
  private ROOT_API_SERVER = "http://localhost:3000";
  private headers = {};
  constructor(private httpClient: HttpClient) { 
    // localStorage.getItem("email");
    this.headers = {"access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVkZjAxNThjY2NlMDQwNTIyMzQ5ZTgzZCIsInJvbGUiOiJhZG1pbiJ9.vifMyXutwFK1KGytpiGM7_HaoYFIP_sxdrYXx9yWEJY"};
  }

  // get all tasks
  public getRestaurantData(){
    return this.httpClient.get(this.RESTAURANT_API_SERVER+"/admin/",{headers:this.headers});
  }
  // get task by id
  public getRestaurantByID(id){
    return this.httpClient.get(this.RESTAURANT_API_SERVER+"/"+id,{headers:this.headers});
  }
  // create task
  public createRestaurant(opost){
    return this.httpClient.post(this.RESTAURANT_API_SERVER, opost,{headers:this.headers});
  }
  // update task
  public editRestaurant(id, opost){
    return this.httpClient.put(this.RESTAURANT_API_SERVER+"/"+id, opost,{headers:this.headers});
  }
  // delete tasks
  public deleteRestaurant(id){
    return this.httpClient.delete<void>(`${this.RESTAURANT_API_SERVER}/${id}`,{headers:this.headers})
  }

  // get all tasks
  public getMenuByRestaurant(res_id){
    return this.httpClient.get(this.MENU_API_SERVER+"/restaurant/"+res_id,{headers:this.headers});
  }
  public getTotalOrdersAnalytics(res_id){
    return this.httpClient.get(this.ROOT_API_SERVER+"/analytics/orders/"+res_id,{headers:this.headers});
  }
  public getTotalRevenueAnalytics(res_id){
    return this.httpClient.get(this.ROOT_API_SERVER+"/analytics/revenue/"+res_id,{headers:this.headers});
  }
  public getCategorywiseAnalytics(res_id){
    return this.httpClient.get(this.ROOT_API_SERVER+"/analytics/category/"+res_id,{headers:this.headers});
  }
  // get task by id
  public getMenuByID(id){
    return this.httpClient.get(this.MENU_API_SERVER+"/"+id,{headers:this.headers});
  }
  // create task
  public createMenu(opost){
    return this.httpClient.post(this.MENU_API_SERVER, opost,{headers:this.headers});
  }
  // update task
  public editMenu(id, opost){
    return this.httpClient.put(this.MENU_API_SERVER+"/"+id, opost,{headers:this.headers});
  }
  // delete tasks
  public deleteMenu(id){
    return this.httpClient.delete<void>(`${this.MENU_API_SERVER}/${id}`,{headers:this.headers})
  }

  public getOrdersByRestaurant(res_id,filter){
    return this.httpClient.get(this.ORDER_API_SERVER+"/"+res_id+"/"+filter,{headers:this.headers});
  }

  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }
}
