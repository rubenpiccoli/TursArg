import { Login } from './../models/login.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  formData: Login;

  readonly rootURL = 'https://localhost:44332/api'

  constructor(private http: HttpClient) { }

  public login(usuario: Login): Observable<any> {
    return this.http.post(this.rootURL + 'api/USUARIOS1/5', usuario, httpOptions);
  }

}
