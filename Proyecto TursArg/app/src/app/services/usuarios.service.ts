import { Usuarios } from './../models/usuarios.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  formData: Usuarios;

  readonly rootURL = 'https://localhost:44332/api'


  constructor(private http: HttpClient) { }

  postUsuario(formData: Usuarios) {

    return this.http.post(this.rootURL + '/USUARIOS1', formData);
  }


}
