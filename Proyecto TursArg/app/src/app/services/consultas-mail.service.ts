import { ConsultasMail } from './../models/consultas-mail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasMailService {

  formData: ConsultasMail;

// readonly rootURL = 'https://tursarg.azurewebsites.net/api'
  readonly rootURL = 'https://localhost:44332/api'

  constructor(private http: HttpClient) { }

  nuevaConsulta(formData: ConsultasMail) {

    return this.http.post(this.rootURL + '/CONSULTAS_VIAEMAIL', formData);

  }

  listarConsultas(): Observable<ConsultasMail[]> {

    return this.http.get<ConsultasMail[]>(this.rootURL + '/CONSULTAS_VIAEMAIL')

  }


}
