import { Directive } from '@angular/core';
import {CiudadesService} from '../services/ciudades.service';
import {Usuarios} from '../models/usuarios.model'
import {map} from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';
import { AsyncValidator, NG_ASYNC_VALIDATORS,Validator,AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[CodpostUnico]',
  providers:[{provide : NG_ASYNC_VALIDATORS, useExisting: CodpostUnicoDirective, multi: true}]
})
export class CodpostUnicoDirective implements AsyncValidator{

  constructor(private serviceCiudad:CiudadesService) { }
  validate(control : import("@angular/forms").AbstractControl): Promise<import("@angular/forms").ValidationErrors> | import("rxjs").Observable<import("@angular/forms").ValidationErrors>{
    const codpost=control.value;
    return this.serviceCiudad.Verificarcodpost(codpost).pipe(
      map(codpostArr =>{
        if (codpostArr.length > 0){
          return {CodpostUnico:true};
        }
        return null;
      })

    );
    
  } 
  
}

