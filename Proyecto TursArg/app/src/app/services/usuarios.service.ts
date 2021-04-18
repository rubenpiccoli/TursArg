import { Usuarios } from './../models/usuarios.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usermodifica } from '../models/usermodifica.interface';
import { Observable } from 'rxjs';


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
/////////Selecciona el usuario para mostrar en el modal por el idUsuario//////
selecionarUsuario(idUsuario:number):Observable<usermodifica>{
    
  return this.http.get<usermodifica>(this.rootURL + '/USUARIOS1?id='+idUsuario)
 }
 
 ///////////confirma modificaciones///////
 putUpdate(formData:Usuarios){
   
   return this.http.put(this.rootURL + '/USUARIOS1?id=36', formData)
 }

}
