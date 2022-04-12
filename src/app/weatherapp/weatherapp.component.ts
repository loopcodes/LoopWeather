import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';



@Component({
  selector: 'app-weatherapp',
  templateUrl: './weatherapp.component.html',
  styleUrls: ['./weatherapp.component.css'],
})
export class WeatherappComponent implements OnInit {
  lat: any;
  lon: any;
  weather: any;
  todayDate = new Date;

  constructor(private weatherService:WeatherService) {}


  ngOnInit(): void {
    this.getLocation();
  }


  getLocation(){
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition((success)=>{
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.weatherService.getWeatherDataByCoords(this.lat, this.lon).subscribe(data =>{
          this.weather = data;
        })
      })
    }
  }

  getCity(city: string) {
    this.weatherService.getWeatherDataByCityName(city).subscribe(data =>{
      this.weather = data;
    })
  }

}
