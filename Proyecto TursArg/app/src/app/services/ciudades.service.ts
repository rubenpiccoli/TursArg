import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Ciudades} from 'src/app/models/ciudades.model';


@Injectable({
  providedIn: 'root'
})
export class CiudadesService {
  formData: Ciudades;

  //readonly rootURL = 'https://tursarg.azurewebsites.net/api'
  readonly rootURL = 'https://localhost:44332/api'

  constructor(private http: HttpClient) { }

 


/////////Selecciona el usuario para mostrar en el modal por el idUsuario//////
listaCiudades(): Observable<Ciudades[]> {

  return this.http.get<Ciudades[]>(this.rootURL + '/CIUDADES')
}

nuevaciudad(formData:Ciudades){
  return this.http.post(this.rootURL + '/CIUDADES', formData);

}

///////////confirma modificaciones///////
ModificaCiudad(id: number, formData: Ciudades) {

  return this.http.put(this.rootURL + '/CIUDADES?id=' + id, formData);
}

//////////borra ciudad /////////////
borrarCiudad(id: number){

  return this.http.delete(this.rootURL + '/CIUDADES?id=' + id);
}
/////// verifica codigo postal si existe //////
Verificarcodpost(codpost:number):Observable<string[]>{
  return this.http.get<string[]>(this.rootURL+'/CIUDADES?codpost='+codpost);

}

}
