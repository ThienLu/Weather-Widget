import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})
export class WeatherWidgetMainComponent implements OnInit {

  WeatherData: any
  timer: any
  constructor() { }

  ngOnInit(): void {
    this.WeatherData = {
      main : {},
      isDay : true
    };
    this.getWeatherData("Auckland");

    setInterval(() => {
      let currentDate = new Date();
      let utc = currentDate.getTime() + (currentDate.getTimezoneOffset() * 60000);
      this.timer = new Date(utc + (this.WeatherData.timezone * 1000));
    }, 1000);

  }

  search(query : string) {
    console.log(query);
    this.getWeatherData(query);
  }

  getWeatherData(query : string) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + query + '&units=metric&APPID=5f2995dd9c084e13788def773a750afc')
     .then(response=>response.json())
     .then(data=>{this.setWeatherData(data);})
  }

  setWeatherData(data : any) {
    this.WeatherData = data;

    //get the sunset time and check whether it is currently before or after
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());

    this.WeatherData.location = this.WeatherData.name + ", " + this.WeatherData.sys.country;
    this.WeatherData.temp = Math.round(this.WeatherData.main.temp) + "°C";
    this.WeatherData.weather = this.WeatherData.weather[0].main;

  }

}
