import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[passwordValidation]',
  providers:[{provide:NG_VALIDATORS, useExisting:PasswordValidationDirective,multi:true }  ]
})
export class PasswordValidationDirective implements Validator {

passwordsProhibidos=['123456', 'querty','123456789','12345678']

  validate(control:import ("@angular/forms").AbstractControl):import ("@angular/forms").ValidationErrors {
    const contrasenia=<string>control.value;
   if (!contrasenia){return;}
   if (contrasenia.length < 4){return;}

   if (this.passwordsProhibidos.indexOf(contrasenia) !== -1){
     return{'passwordValidation': {'message':'Escoge un mejor password  '}}
    }

    if (contrasenia===contrasenia.toLowerCase()){
      return{'passwordValidation': {'message':'Tu password debe contener mayúsculas'}}
    } 
    if (contrasenia===contrasenia.toUpperCase()){
      return{'passwordValidation': {'message':'Tu password debe contener minúsculas'}}
    } 
    
    if (!/\d/.test(contrasenia)){
      return{'passwordValidation': {'message':'Tu password debe incluir un caracter numérico'}}
    } 
   return null;
  }
  
  
  constructor() { }
}
