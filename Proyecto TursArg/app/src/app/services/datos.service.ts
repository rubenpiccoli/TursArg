import { Usuarios } from './../models/usuarios.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DatosService {

    datosUsuario: Usuarios[] = [];

    constructor() { }

    agregarDatos(val: Usuarios) {
        this.datosUsuario.push(val)
    }

    mostrarDatos() {
        return this.datosUsuario;
    }


}
