import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {  of } from 'rxjs';
import 'rxjs/add/operator/map';
import { Customer } from './Forms/Model/customer.component';
import {catchError, retry} from 'rxjs/internal/operators';


@Injectable()
export class RegisterCustomerService {
  private headers = new HttpHeaders();

  private BASE_URL: String = 'http://localhost:3000';
  private isLoggedIn;
  customer: any = [];

  constructor(private http: HttpClient) {
    this.isLoggedIn = true;
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  postNewCustomer(customer: Customer) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${this.BASE_URL}/customer`, customer, { headers: this.headers = this.headers.set('api-key', '54asdkj1209nksnda') })
     .map((data) => console.log(JSON.stringify(data)));
  }

login(email: string, password: string) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${this.BASE_URL}/login/customer`, {email : email, password : password}, { headers: this.headers = this.headers.set('api-key', '54asdkj1209nksnda')} )
    .pipe(catchError(this.handleError('Customer Login', {email : email, password : password})));
}

  updateRestDetails(id: number, customer: Customer){
    return this.http.put(`${this.BASE_URL}/api/Customers/${id}`, customer)
    .map((results: Response) => results.json());
  }

  viewRestDetails(){
    return this.http.get(`${this.BASE_URL}/api/Customers`)
    .map((results: Response) => results.json());
  }

  logout() {
      sessionStorage.clear();
  }

  setIsLoggedIn(){
    this.isLoggedIn = true;
  }

  getIsLoggedIn(){
    return this.isLoggedIn;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

}
