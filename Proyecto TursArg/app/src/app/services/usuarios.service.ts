import { Usuarios } from './../models/usuarios.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usermodifica } from '../models/usermodifica.interface';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  Token: string;
  formData: Usuarios;

// readonly rootURL = 'https://tursarg.azurewebsites.net/api'
  readonly rootURL = 'https://localhost:44332/api'

  constructor(private http: HttpClient) { }

  postUsuario(formData: Usuarios) {

    return this.http.post(this.rootURL + '/USUARIOS1', formData);
  }

  /////////Selecciona el usuario para mostrar en el modal por el idUsuario//////
  selecionarUsuario(Token: string): Observable<usermodifica> {

    return this.http.get<usermodifica>(this.rootURL + '/USUARIOS1?Token=' + Token)
  }

  ///////////confirma modificaciones///////
  putUpdate(id: number, formData: Usuarios) {

    return this.http.put(this.rootURL + '/USUARIOS1?id=' + id, formData)
  }
////// verificar si exite el Email /////
VerificarEmail(email:string):Observable<string[]>{
  return this.http.get<string[]>(this.rootURL+'/USUARIOS1?email='+email);
}


/////listar usuario/////
listarusuarios(): Observable<Usuarios[]> {

  return this.http.get<Usuarios[]>(this.rootURL + '/USUARIOS1')
}



}



