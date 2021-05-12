import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UrlService {

    constructor() { }



  // urlRegistro = 'https://tursarg.azurewebsites.net/api';
   // urlLogin = 'https://tursarg.azurewebsites.net/api/USUARIOS1/login';
    urlRegistro = 'https://localhost:44332/api';
    urlLogin = 'https://localhost:44332/api/USUARIOS1/login';
    

}
