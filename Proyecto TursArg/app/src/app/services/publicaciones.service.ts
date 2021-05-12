import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Publicaciones} from '../models/publicaciones.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  formData: Publicaciones;
  //readonly rootURL = 'https://tursarg.azurewebsites.net/api'
  readonly rootURL = 'https://localhost:44332/api'
  constructor(private http:HttpClient) { }


  /////////Selecciona todas las PUblicaciones de ese idTema//////
ListarPublicaciones(id: number): Observable<Publicaciones> {

    return this.http.get<Publicaciones>(this.rootURL + '/PUBLICACIONES?idTEMA=' + id)
  }

  ////////// guarda (registra publicacion de foro)
  postpublicaciones(formData:Publicaciones){

  return this.http.post(this.rootURL + '/PUBLICACIONES', formData);

}
listapublicaciones():Observable<Publicaciones[]> {
  return this.http.get<Publicaciones[]>(this.rootURL + '/PUBLICACIONES')
}

}
