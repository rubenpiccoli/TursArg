import { Component, OnInit } from '@angular/core';
import{UsuariosService} from 'src/app/services/usuarios.service';
import { HttpClient} from  '@angular/common/http';
import {UsuariosComponent} from 'src/app/components/usuarios/usuarios.component'
import {FormGroup,Validator, Validators, FormBuilder, FormControl, FormsModule, NgForm} from '@angular/forms';
import { Usuarios } from 'src/app/models/usuarios.model';
import { pipe, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import{usermodifica} from '../../models/usermodifica.interface';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-modificacionusuarios',
  templateUrl: './modificacionusuarios.component.html',
  styleUrls: ['./modificacionusuarios.component.css']
})
export class ModificacionusuariosComponent implements OnInit {
  

   
  
   datosUsuario:usermodifica;
   form = new FormGroup({
    
    apellido:new FormControl(''),
    contrasenia:new FormControl('',[Validators.required, Validators.minLength(8)]),
    idUsuario:new FormControl(''),
    mail:new FormControl('',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    nombre: new FormControl(''),
    nombreUsuario: new FormControl(''),
    rolAdmin: new FormControl (''),
    //repitaContrasenia:new FormControl('',Validators.required),
    telefono:new FormControl(''),
    urlFotoUsuario: new FormControl('')
    
  });
 
  constructor(public service: UsuariosService, private http: HttpClient) { }
 
  

  CampoValido(campo:string){
    return this.form.controls[campo].errors && this.form.controls[campo].touched;
  }

  ngOnInit(): void {
    
    }

UpDate(){
////Trae id del usuario a mostrar

this.selecionarusuario()
}

selecionarusuario(){
  // this.initvaluesform(usuarios)
   const idUsuario=36;
    this.service.selecionarUsuario(idUsuario).subscribe(data=> {
      this.datosUsuario=data;
      console.log('verrrrrfa',data);
     var id = this.datosUsuario.idUsuario
     console.log(id)
      this.form.setValue({
        'nombre': this.datosUsuario.nombre,
        'apellido': this.datosUsuario.apellido,
        'mail': this.datosUsuario.mail,
        'contrasenia': this.datosUsuario.contrasenia,
        //'repitaContrasenia': 
        'telefono': this.datosUsuario.telefono,
       'rolAdmin':  this.datosUsuario.rolAdmin,
       'urlFotoUsuario': this.datosUsuario.urlFotoUsuario,
        'nombreUsuario': this.datosUsuario.nombreUsuario,
        'idUsuario':this.datosUsuario.idUsuario

      })
   
   

    });
   

 }


 onSubmit(form){

    this.service.putUpdate(form.value).subscribe(Datos => {
       /// para ultilizar la ventana modificado con exito
      if (Datos['Resultado']== 'Ok')
    {
      Swal.fire(
        /// para ultilizar la ventana modificado con exito
          'Modificacion con Exito',
          'De clck en el Boton',
          'success'
        )
    }
    
   });
 }


}

