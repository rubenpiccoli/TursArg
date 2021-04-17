import { Login } from './../models/login.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/usuarios.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'text/plain' })
  
};
let params= new HttpParams();

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  readonly rootURL = 'https://localhost:44332/api'

  constructor(private http: HttpClient) { }

  public login(formLogin:Login): Observable<any> {
    //params=params.append("email", email)
   // params=params.append("contrasenia", contrasenia)
        return this.http.post(this.rootURL + '/USUARIOS1/Login', formLogin)
       


  }
}
