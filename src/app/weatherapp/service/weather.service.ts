import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/weather';
  apikey = 'd9a2d8a998557e8c12d8525878b1e2f5';


  constructor(private http:HttpClient) { }


  getWeatherDataByCoords(lat: string | number | boolean, lon: string | number | boolean) {
    let params = new HttpParams()
    .set('lat', lat)
    .set('lon', lon)
    .set('units', 'metric')
    .set('appid', this.apikey)
  
    return this.http.get(this.url, { params });
  } 


  getWeatherDataByCityName(city: string) {
    let params = new HttpParams()
    .set('q', city)
    .set('units', 'metric')
    .set('appid', this.apikey)
  
    return this.http.get(this.url, { params });
  }

}

