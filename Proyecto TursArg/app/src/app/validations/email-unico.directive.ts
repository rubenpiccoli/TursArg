import { Directive } from '@angular/core';
import {UsuariosService} from '../services/usuarios.service';
import {Usuarios} from '../models/usuarios.model'
import {map} from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';
import { AsyncValidator, NG_ASYNC_VALIDATORS,Validator,AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[EmailUnico]',
  providers:[{provide : NG_ASYNC_VALIDATORS, useExisting: EmailUnicoDirective, multi: true}]
})
 

export class EmailUnicoDirective implements AsyncValidator{

    constructor(private UsuariosService:UsuariosService) { }

    
    validate(control : import("@angular/forms").AbstractControl): Promise<import("@angular/forms").ValidationErrors> | import("rxjs").Observable<import("@angular/forms").ValidationErrors> {
    const email=control.value;
    return this.UsuariosService.VerificarEmail(email).pipe(
      map(emailArr =>{
        if (emailArr.length > 0){
          return {EmailUnico:true};
        }
        return null;
      })

    );
    
  } 
  
}

