import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Admin } from './Forms/Model/Admin.component';
import {catchError, retry} from 'rxjs/internal/operators';
import { Observable } from 'rxjs/Observable';
import {  of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantAdminService {
  private RESTAURANT_API_SERVER = "http://localhost:3000/restaurant";
  private MENU_API_SERVER = "http://localhost:3000/menu";
  private ORDER_API_SERVER = "http://localhost:3000/orders";
  private ROOT_API_SERVER = "http://localhost:3000";
  private headers = {};
  private headers1 = new HttpHeaders();
  constructor(private httpClient: HttpClient) {
    // localStorage.getItem("email");
    this.headers = {"access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVkZjAxNThjY2NlMDQwNTIyMzQ5ZTgzZCIsInJvbGUiOiJhZG1pbiJ9.vifMyXutwFK1KGytpiGM7_HaoYFIP_sxdrYXx9yWEJY"};
  }
  postNewAdmin(admin: Admin) {
    // tslint:disable-next-line: max-line-length
    return this.httpClient.post(this.ROOT_API_SERVER+"/admin", admin, { headers: this.headers1 = this.headers1.set('api-key', '54asdkj1209nksnda') })
     .map((data) => console.log(JSON.stringify(data)));
  }

  login(email: string, password: string) {
      // tslint:disable-next-line: max-line-length
      return this.httpClient.post(this.ROOT_API_SERVER+"/login/admin", {email : email, password : password}, { headers: this.headers1 = this.headers1.set('api-key', '54asdkj1209nksnda')} )
      .pipe(catchError(this.handleError('Admin Login', {email : email, password : password})));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  logout() {
    sessionStorage.clear();
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
