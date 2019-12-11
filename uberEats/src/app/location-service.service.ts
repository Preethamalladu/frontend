import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {
  private api_url = 'https://api.opencagedata.com/geocode/v1/json';
  private apikey = 'c564ed35c5dc4c8a9dfc7c2f5daf0b01';
  constructor(private httpClient: HttpClient) { }


  public sendGetRequest(lat, long){
    var request_url = this.api_url
          + '?'
          + 'key=' + this.apikey
          + '&q=' + encodeURIComponent(lat + ',' + long)
          + '&pretty=1'
          + '&no_annotations=1';
        
    return this.httpClient.get(request_url);
  } 
}
