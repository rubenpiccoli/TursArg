import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators}from '@angular/forms'
import { CookieService } from 'ngx-cookie-service';
import { TemaDeForo } from 'src/app/models/tema-de-foro.model';
import { Usuarios } from 'src/app/models/usuarios.model';
import { PublicacionesService } from 'src/app/services/publicaciones.service';
import{TemaDeForoService} from 'src/app/services/tema-de-foro.service'
import{UsuariosService}from  'src/app/services/usuarios.service'
import swal from 'sweetalert2';



@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {
  tema_de_foro : any[];
  usuarios:any[];
   id:number;
   Perfil:string;
   datosUsuario: Usuarios;
   publicaciones:any[];
  // replica: number;
   array:any[];

 form:FormGroup=this.formBuilder.group({
    idTema: [0],
    nombreDeTema: ['',Validators.required],
    fechaTema:[''],
    idUserForo: ['']
   
  });
  


  constructor(private servicepublicaciones:PublicacionesService ,private formBuilder:FormBuilder,private service:TemaDeForoService, private serviceuser:UsuariosService,private cookieToken: CookieService) {
    this.Perfil = this.cookieToken.get('Token');
    
    }
   

  ngOnInit(): void {
    this.listartema_de_foro();
   this.buscausuario();
  }
 
  buscausuario(){
    if(this.Perfil!=""){

      this.serviceuser.selecionarUsuario(this.Perfil).subscribe(data => {
        this.datosUsuario = data[0];
       // console.log('verrrrrfa', this.datosUsuario);
        this.id = this.datosUsuario.idUsuario
        
      })
  }
}

  listartema_de_foro(){
    /////busca para listar los tema de foro/////
    this.service.listartema_de_foro().subscribe(data => {
      this.tema_de_foro = data;
   
   ////// busca los usuarios para luego comparar///
    /////id de usuario con el id de tema de foro para colocar el nombre y apellido //////   
      this.serviceuser.listarusuarios().subscribe(data1 =>{
        this.usuarios=data1;
        //// LISTA LAS PUBLICACIONES PARA CONTAR CUANTAS PUBLICACIONES TIENE CADA TEMA /////
       // this.servicepublicaciones.listapublicaciones().subscribe(data2 =>{
       //   this.publicaciones=data2;
                           
        //})
      })
    })
      
  }
 

  resetForm(form) {
    if (form != null)
    this.form.reset();
  }
  onSubmit(){
    if (this.form.invalid){
    this.form.markAllAsTouched
    }
    this.form.value.idUserForo=this.id;
    console.log('formularioooooo',this.form)
    this.service.posttemadeforo(this.form.value).subscribe(res => {
      swal.fire('Enhorabuena', 'Tema Creado exitosamente', 'success').then(function(){ 
        location.reload()
       });
      
      this.resetForm(this.form);
        ////cierra el Modal con el id cerrar////
      document.getElementById('cerrar').click();
    });
  }
  CampoValido(campo: string) {
    return this.form.controls[campo].errors && this.form.controls[campo].touched;
  }


}
