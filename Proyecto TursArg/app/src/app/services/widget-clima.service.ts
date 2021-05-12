import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WidgetClimaService {

  apiKey: string = 'R77GTGQHSEMYK7Y9C6R4J57XG';
  URI: string = '';

  constructor(private http: HttpClient) {
    this.URI = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`;


  }

  getWeather(cityName: string) {
    return this.http.get(`${this.URI}${cityName}${"?unitGroup=metric&key="}${this.apiKey}${"&include=fcst%2Ccurrent"}`);

  }
}