import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{TemaDeForo} from '../models/tema-de-foro.model'

@Injectable({
  providedIn: 'root'
})
export class TemaDeForoService {

  formData: TemaDeForo;
 // readonly rootURL = 'https://tursarg.azurewebsites.net/api'
  readonly rootURL = 'https://localhost:44332/api'
  
  constructor(private http: HttpClient) { }


  /////////lista los temas de foro//////
  listartema_de_foro(): Observable<TemaDeForo[]> {

  return this.http.get<TemaDeForo[]>(this.rootURL + '/TEMASDEFORO')
}

////////// guarda (registra tema de foro)
posttemadeforo(formData:TemaDeForo){

  return this.http.post(this.rootURL + '/TEMASDEFORO', formData);

}

}
