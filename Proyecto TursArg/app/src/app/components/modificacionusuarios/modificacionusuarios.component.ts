import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { HttpClient } from '@angular/common/http';
//import { UsuariosComponent } from 'src/app/components/usuarios/usuarios.component'
import { FormGroup, Validator, Validators, FormBuilder, FormControl, FormsModule, NgForm } from '@angular/forms';
import { Usuarios } from 'src/app/models/usuarios.model';
import { pipe, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { usermodifica } from '../../models/usermodifica.interface';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modificacionusuarios',
  templateUrl: './modificacionusuarios.component.html',
  styleUrls: ['./modificacionusuarios.component.css']
})
export class ModificacionusuariosComponent implements OnInit {


  Token: string;
  id: number;
  datosUsuario: usermodifica;
  form = new FormGroup({
    apellido: new FormControl(''),
    contrasenia: new FormControl('', [Validators.required, Validators.minLength(6)]),
    idUsuario: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    nombre: new FormControl(''),
    nombreUsuario: new FormControl(''),
    rolAdmin: new FormControl(''),
    //repitaContrasenia:new FormControl('',Validators.required),
    telefono: new FormControl(''),
    urlFotoUsuario: new FormControl(''),
    Token: new FormControl('')
  });

  constructor(public service: UsuariosService, private http: HttpClient, private cookieToken: CookieService, private router: Router) { }



  CampoValido(campo: string) {
    return this.form.controls[campo].errors && this.form.controls[campo].touched;
  }

  ngOnInit(): void {

  }

  UpDate() {
    ////Trae id del usuario a mostrar


    this.selecionarusuario()
  }

  selecionarusuario() {
    // this.initvaluesform(usuarios)
    this.Token = this.cookieToken.get('Token');
    this.service.selecionarUsuario(this.Token).subscribe(data => {
      this.datosUsuario = data[0];
     // console.log('verrrrrfa', this.datosUsuario);
      this.id = this.datosUsuario.idUsuario
      //console.log(id)
      this.form.setValue({
        'nombre': this.datosUsuario.nombre,
        'apellido': this.datosUsuario.apellido,
        'email': this.datosUsuario.email,
        'contrasenia': this.datosUsuario.contrasenia,
        //'repitaContrasenia': 
        'telefono': this.datosUsuario.telefono,
        'rolAdmin': this.datosUsuario.rolAdmin,
        'urlFotoUsuario': this.datosUsuario.urlFotoUsuario,
        'nombreUsuario': this.datosUsuario.nombreUsuario,
        'idUsuario': this.datosUsuario.idUsuario,
        'Token': this.datosUsuario.Token

      })



    });


  }


  onSubmit(form) {
    // this.Token=this.cookieToken.get('Token')

    this.service.putUpdate(this.id, form.value).subscribe(Datos => {

      /// para ultilizar la ventana modificado con exito

      Swal.fire('Modificación con exito', 'De click en el Boton', 'success');
      // this.router.navigate(['/']);
      ////cierra el Modal con el id AddExpense////
      document.getElementById('AddExpense').click();

    });
  }


}

